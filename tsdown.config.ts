import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'tsdown'
import vue from 'unplugin-vue/rolldown'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig([
  {
    entry: ['./src/index.ts'],
    platform: 'neutral',
    fromVite: true,
    tsconfig: resolve(__dirname, 'tsconfig.app.json'),
    dts: {
      vue: true,
    },
  },
])
