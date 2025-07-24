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
      const props: any[] = []
      await parseAndWalk(script, `${name}.ts`, node => {
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
                props.push({ name: propName, type: propType })
              }
            }
          })
        }
      })
      console.log(props)
      // props to markdown table
      if (props.length > 0) {
        const tableHeader = '| Prop | Type |\n| --- | --- |\n'
        const tableRows = props.map(prop => `| ${prop.name} | ${prop.type.replace(/\|/g, '\\|')} |`).join('\n')
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
