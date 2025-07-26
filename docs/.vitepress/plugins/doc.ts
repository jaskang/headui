import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseAndWalk, walk } from 'oxc-walker'
import type { Plugin } from 'vite'
import { parse as parseVue } from 'vue/compiler-sfc'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function replaceDoc(id: string, content: string): Promise<string | undefined> {
  // id: /Users/jaskang/Documents/codes/headui/docs/components/button.md
  // 只匹配 components/xxx.md，不匹配多层目录
  const matchVal = id.match(/components\/([^/]+)\.md$/)
  if (matchVal && matchVal.length === 2) {
    // matchVal[1] 首字母大写的组件名
    const n = matchVal[1] as string
    // 读取组件文件，获取文档注释
    const name = n.charAt(0).toUpperCase() + n.slice(1)
    try {
      const vueCode = await readFile(join(__dirname, `../../../src/components/${name}.vue`), 'utf-8')
      const vueSFC = await parseVue(vueCode)
      const script = vueSFC.descriptor.scriptSetup?.content || ''
      console.log(script)
      const props: {
        name: string
        type: string
        optional: boolean
        start: number
        end: number
        comment: string
        default: string
      }[] = []
      const ast = await parseAndWalk(script, `${name}.ts`, (node, parent, ctx) => {
        if (
          node.type === 'TSTypeAliasDeclaration' &&
          node.id.name === `${name}Props` &&
          node.typeAnnotation.type === 'TSTypeLiteral'
        ) {
          node.typeAnnotation.members.forEach(member => {
            if (member.type === 'TSPropertySignature' && member.key.type === 'Identifier') {
              const propName = member.key.name
              const typeAnnotation = member.typeAnnotation?.typeAnnotation
              if (typeAnnotation) {
                const propType = script.slice(typeAnnotation.start, typeAnnotation.end)
                props.push({
                  name: propName,
                  type: propType,
                  optional: member.optional,
                  start: member.start,
                  end: member.end,
                  comment: '',
                  default: '',
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
              if (prop.type === 'Property' && prop.key.type === 'Identifier' && prop.value.type === 'Literal') {
                const propName = prop.key.name
                const value = prop.value.value
                const foundProp = props.find(p => p.name === propName)
                if (foundProp) {
                  foundProp.default = `${value ?? ''}`
                }
              }
            })
          }
        }
      })
      // console.log(props, ast)
      for (const prop of props) {
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
      // props to markdown table
      if (props.length > 0) {
        const tableHeader = '| Prop | 描述 | 默认值 | 类型 | \n| --- | --- | --- | --- |\n'
        const tableRows = props
          .map(
            prop => `| ${prop.name} | ${prop.comment} | ${prop.default || '\/'} | ${prop.type.replace(/\|/g, '\\|')} |`
          )
          .join('\n')
        content = content.replace(/\\\[\\\[doc\]\]/g, `${tableHeader}${tableRows}`)
      }
      // return content.replace(/\\\[\\\[doc\]\]/g, `doc:${name?.toUpperCase()}`)
      return content
    } catch (error) {
      console.error(`Error reading component file: ${error}`)
    }
  }
}

export function doc(): Plugin {
  return {
    name: 'vite:markdown-doc',
    enforce: 'pre',
    async transform(code, id, options) {
      if (id.endsWith('.md')) {
        const ret = await replaceDoc(id, code)
        console.log(id)
        return ret
      }
    },
  }
}
