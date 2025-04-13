import { prettier } from '@jaskang/config'

export default {
  ...prettier(),
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['tw'],
}
