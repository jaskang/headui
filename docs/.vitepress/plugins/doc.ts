import type { Plugin } from 'vite'

function replaceDoc(id: string, content: string): string | undefined {
  // id: /Users/jaskang/Documents/codes/headui/docs/components/button.md
  // 只匹配 components/xxx.md，不匹配多层目录
  const ret = id.match(/components\/([^\/]+)\.md$/)
  if (ret && ret.length === 2) {
    const name = ret[1]
    return content.replace(/\\\[\\\[doc\]\]/g, `doc:${name?.toUpperCase()}`)
  }
}

export function doc(): Plugin {
  return {
    name: 'vite:markdown-doc',
    enforce: 'pre',
    transform(code, id, options) {
      if (id.endsWith('.md')) {
        const ret = replaceDoc(id, code)
        console.log(id)
        return ret
      }
    },
  }
}
