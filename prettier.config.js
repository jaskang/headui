import { configs } from '@jaskang/config'

export default {
  ...configs.prettier,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tw'],
}
