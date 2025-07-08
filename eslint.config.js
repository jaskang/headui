import { eslint } from '@jaskang/config'

export default eslint(
  {
    vue: true,
  },
  {
    rules: {
      'import/first': 'off',
    },
  }
)
