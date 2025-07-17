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
      { text: 'Home', link: '/', activeMatch: '/' },
      { text: 'Components', link: '/components/button', activeMatch: '/components/' },
      { text: '更新日志', link: '/CHANGELOG', activeMatch: '/CHANGELOG' },
    ],

    sidebar: {
      '/components/': [
        {
          text: '基础',
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Anchor', link: '/components/anchor' },
            { text: 'ScrollArea', link: '/components/scroll-area' },
          ],
        },
        {
          text: '表单',
          items: [
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Radio', link: '/components/radio' },
            { text: 'Input', link: '/components/input' },
            { text: 'Textarea', link: '/components/textarea' },
            { text: 'Select', link: '/components/select' },
            { text: 'Switch', link: '/components/switch' },
          ],
        },
        {
          text: '展示',
          items: [
            { text: 'Menu', link: '/components/menu' },
            { text: 'Tab', link: '/components/tab' },
            { text: 'Avatar', link: '/components/avatar' },
            { text: 'Badge', link: '/components/badge' },
            { text: 'ListBox', link: '/components/list-box' },
          ],
        },
        {
          text: '反馈',
          items: [
            { text: 'Popover', link: '/components/popover' },
            { text: 'Tooltip', link: '/components/tooltip' },
            { text: 'Sheet', link: '/components/sheet' },
          ],
        },
      ],
    },
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
