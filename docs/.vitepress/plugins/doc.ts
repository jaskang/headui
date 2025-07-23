import fs from 'node:fs'
import { parseAsync } from 'oxc-parser'
import { parse as parseVue } from 'vue/compiler-sfc'

async function loadComponentDoc(file: string) {
  const content = fs.readFileSync(file, 'utf8')
  const vue = parseVue(content)
  const ast = await parseAsync('gg', vue.descriptor.scriptSetup?.content || '')
  console.log('ast', ast)
  return ast
}
