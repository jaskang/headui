import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import jsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vitepress'
import { demo } from './plugins/demo'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Awesome Project',
  // appearance: {
  //   valueDark: 'vscode-dark',
  //   valueLight: 'vscode-light',
  // },
  description: 'A VitePress Site',
  markdown: {
    // lineNumbers: true,
    codeTransformers: [
      {
        pre(node) {
          this.addClassToHast(node, 'not-prose')
        },
      },
    ],
    headers: true,
    theme: { light: 'github-light', dark: 'github-dark' },
    languages: ['vue', 'javascript', 'typescript', 'css', 'html', 'json', 'bash'],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { title: 'Home', link: '/', activeMatch: '/' },
      { title: 'Components', link: '/components/button', activeMatch: '/components/' },
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { title: 'Button', link: '/components/button' },
          { title: 'Anchor', link: '/components/anchor' },
          { title: 'ScrollArea', link: '/components/scroll-area' },
        ],
      },
      {
        text: '表单',
        items: [
          { title: 'Checkbox', link: '/components/checkbox' },
          { title: 'Radio', link: '/components/radio' },
          { title: 'Input', link: '/components/input' },
          { title: 'Textarea', link: '/components/textarea' },
          { title: 'Select', link: '/components/select' },
          { title: 'Switch', link: '/components/switch' },
        ],
      },
      {
        text: '展示',
        items: [
          { title: 'Menu', link: '/components/menu' },
          { title: 'Tab', link: '/components/tab' },
          { title: 'Avatar', link: '/components/avatar' },
          { title: 'Badge', link: '/components/badge' },
          { title: 'ListBox', link: '/components/list-box' },
        ],
      },
      {
        text: '反馈',
        items: [
          { title: 'Popover', link: '/components/popover' },
          { title: 'Tooltip', link: '/components/tooltip' },
          { title: 'Sheet', link: '/components/sheet' },
        ],
      },
    ],
  },
  vite: {
    plugins: [jsx(), demo(), tailwindcss()],
    resolve: {
      alias: [
        { find: 'sinvue', replacement: resolve(__dirname, '../../src') },
        { find: '@', replacement: resolve(__dirname, '../../src') },
      ],
    },
    css: {
      transformer: 'lightningcss',
    },
  },
})
