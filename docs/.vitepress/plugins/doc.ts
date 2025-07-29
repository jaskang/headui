import { stat } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pathExists } from 'fs-extra/esm'
import { parseAndWalk } from 'oxc-walker'
import type { Plugin } from 'vite'
import { parse as parseVue } from 'vue/compiler-sfc'

const __dirname = dirname(fileURLToPath(import.meta.url))

function encodeMarkdown(val: string): string {
  return val.replace(/\|/g, '\\|').replace(/</g, '\\<').replace(/>/g, '\\>')
}

type Docs = {
  models: {
    name: string
    type: string
    required: boolean
    default?: string
  }[]
  props: {
    name: string
    type: string
    optional: boolean
    start: number
    end: number
    comment: string
    default?: string
  }[]
  emits: { name: string; args: string }[]
  slots: { name: string; props: string }[]
}

async function getVueDocs(id: string): Promise<string> {
  const doc: Docs = {
    props: [],
    models: [],
    slots: [],
    emits: [],
  }
  try {
    if (!(await pathExists(id))) {
      console.warn(`doc file not found: ${id}`)
      return ''
    }
    const name = basename(id).replace(/.vue$/, '')
    const vueCode = await readFile(id, 'utf-8')
    const vueSFC = await parseVue(vueCode)
    const script = vueSFC.descriptor.scriptSetup?.content || ''
    const ast = await parseAndWalk(script, `${id}.ts`, (node, parent, ctx) => {
      if (
        node.type === 'TSTypeAliasDeclaration' &&
        node.id.name.endsWith('Props') &&
        node.typeAnnotation.type === 'TSTypeLiteral'
      ) {
        node.typeAnnotation.members.forEach(member => {
          if (member.type === 'TSPropertySignature' && member.key.type === 'Identifier') {
            const propName = member.key.name
            const typeAnnotation = member.typeAnnotation?.typeAnnotation
            if (typeAnnotation) {
              const propType = script.slice(typeAnnotation.start, typeAnnotation.end)
              doc.props.push({
                name: propName,
                type: propType,
                optional: member.optional,
                start: member.start,
                end: member.end,
                comment: '',
              })
            }
          }
        })
      }
      // props default value 处理
      if (
        node.type === 'CallExpression' &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'withDefaults' &&
        node.arguments.length === 2
      ) {
        const obj = node.arguments[1]!
        if (obj.type === 'ObjectExpression') {
          obj.properties.forEach(prop => {
            if (prop.type === 'Property' && prop.key.type === 'Identifier') {
              const propName = prop.key.name
              const foundProp = doc.props.find(p => p.name === propName)
              if (foundProp) {
                foundProp.default = script.slice(prop.value.start, prop.value.end)
                // console.log('default props:', propName, foundProp.default)
              }
            }
          })
        }
      }

      // 处理 defineModel
      if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'defineModel') {
        const model: Docs['models'][number] = {
          name: 'modelValue',
          type: 'any',
          required: false,
        }
        if (node.arguments.length >= 1) {
          const modelName = node.arguments[0]!
          if (modelName.type === 'Literal') {
            model.name = modelName.value as string
          }
          if (node.arguments.length >= 2) {
            const modelOptions = node.arguments[1]!
            if (modelOptions.type === 'ObjectExpression') {
              modelOptions.properties.forEach(prop => {
                if (prop.type === 'Property' && prop.key.type === 'Identifier') {
                  if (prop.key.name === 'required' && prop.value.type === 'Literal') {
                    model.required = Boolean(prop.value.value)
                  }
                  if (prop.key.name === 'default') {
                    model.default = script.slice(prop.value.start, prop.value.end)
                  }
                }
              })
            }
          }
        }
        if (node.typeArguments && node.typeArguments.params.length > 0) {
          const typeParam = node.typeArguments.params[0]!
          model.type = script.slice(typeParam.start, typeParam.end)
        }
        doc.models.push(model)
      }

      if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'defineEmits') {
        if (
          node.typeArguments &&
          node.typeArguments.type === 'TSTypeParameterInstantiation' &&
          node.typeArguments.params.length > 0 &&
          node.typeArguments.params[0]!.type === 'TSTypeLiteral'
        ) {
          const typeLiteral = node.typeArguments.params[0]!
          typeLiteral.members.forEach(member => {
            if (member.type === 'TSPropertySignature' && member.key.type === 'Identifier' && member.typeAnnotation) {
              doc.emits.push({
                name: member.key.name,
                args: script.slice(
                  member.typeAnnotation.typeAnnotation.start,
                  member.typeAnnotation.typeAnnotation.end
                ),
              })
            }
          })
        }
      }

      if (node.type === 'CallExpression' && node.callee.type === 'Identifier' && node.callee.name === 'defineSlots') {
        if (
          node.typeArguments &&
          node.typeArguments.type === 'TSTypeParameterInstantiation' &&
          node.typeArguments.params.length > 0 &&
          node.typeArguments.params[0]!.type === 'TSTypeLiteral'
        ) {
          const typeLiteral = node.typeArguments.params[0]!
          typeLiteral.members.forEach(member => {
            if (member.type === 'TSMethodSignature' && member.key.type === 'Identifier' && member.params.length > 0) {
              const _props = member.params[0]!
              const typeAnnotation = _props.typeAnnotation?.typeAnnotation || null
              let propsType = 'any'
              if (typeAnnotation) {
                propsType = script.slice(typeAnnotation.start, typeAnnotation.end)
              }
              doc.slots.push({
                name: member.key.name,
                props: propsType,
              })
            }
          })
        }
      }
    })
    // console.log(props, ast)
    for (const prop of doc.props) {
      const comment = ast.comments.find(comment => {
        return comment.end + 3 === prop.start
      })
      if (comment) {
        // 去除首尾空格和换行符
        // 这里的 comment.value 是包含 /** 和 */ 的注释内容
        // 需要去除首尾的 /** 和 */
        // 以及首尾的空格和换行符
        // 例如 /** 这是一个注释 */ -> 这是一个注释
        // 变成 这是一个注释
        prop.comment = comment.value.replace(/^[\s|*]*|\s*$/g, '')
      }
    }

    let result = ''
    if (doc.models.length > 0) {
      result += `\n### Models\n`
      result += `| 名称 | 类型 | 默认值 |\n| --- | --- | --- |\n`
      doc.models.forEach(model => {
        result += `| ${model.name} | ${encodeMarkdown(model.type)} | ${encodeMarkdown(model.default ?? '/')} |\n`
      })
    }
    if (doc.props.length > 0) {
      result += `\n### Props\n`
      result += `| Prop | 描述 | 默认值 | 类型 |\n| --- | --- | --- | --- |\n`
      doc.props.forEach(prop => {
        result += `| ${prop.name} | ${prop.comment} | ${encodeMarkdown(prop.default ?? '/')} | ${encodeMarkdown(prop.type)} |\n`
      })
    }
    if (doc.emits.length > 0) {
      result += `\n### Emits\n`
      result += `| 事件名 | 参数 |\n| --- | --- |\n`
      doc.emits.forEach(emit => {
        result += `| ${emit.name} | ${encodeMarkdown(emit.args)} |\n`
      })
    }
    if (doc.slots.length > 0) {
      result += `\n### Slots\n`
      result += `| 名称 | Props |\n| --- | --- |\n`
      doc.slots.forEach(slot => {
        result += `| ${slot.name} | ${encodeMarkdown(slot.props)} |\n`
      })
    }
    if (result.length > 0) {
      result = `## ${name} API\n ${result}`
    }
    return result
  } catch (error) {
    console.error(`Error reading component file: ${error}`)
    return ''
  }
}

// <!-- @include: ./parts/basics.md-->
const docRE = /<!--\s*@doc:\s*(.*?)\s*-->/g

async function replaceDoc(id: string, content: string): Promise<string | undefined> {
  const tags = content.match(docRE) || []
  const tagsMap = new Map<string, string>()
  for (const tag of tags) {
    // 获取 tag 中的文件路径
    const match = tag.match(/<!--\s*@doc:\s*(.*?)\s*-->/)
    if (match && match[1]) {
      const includePath = join(dirname(id), match[1])
      const exists = await pathExists(includePath)
      if (exists && includePath.endsWith('.vue')) {
        tagsMap.set(match[1], await getVueDocs(includePath))
      }
    }
  }
  return content.replace(docRE, (m: string, m1: string) => {
    if (!m1.length) return m
    return tagsMap.get(m1) || m
  })
}

export function doc(): Plugin {
  return {
    name: 'vite:markdown-doc',
    enforce: 'pre',
    async transform(code, id, options) {
      if (id.endsWith('.md')) {
        const ret = await replaceDoc(id, code)
        return ret
      }
    },
  }
}
