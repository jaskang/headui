import createPlugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

function isGray(key) {
  const grayColors = ['gray', 'slate', 'zinc', 'neutral', 'stone']
  return grayColors.includes(key)
}
export default createPlugin(({ matchUtilities, addUtilities, theme }) => {
  const colors = theme('colors')
  /**
   * @type { primary: string, success: string, warning: string, danger: string, gray: string }
   */
  const headui = theme('headui')
  console.log('headui', headui)
  const flattenedColors = flattenColorPalette(colors)
  const colorKeys = Object.keys(flattenedColors)
    .filter(key => key.endsWith('500'))
    .map(key => {
      return key.replace(/-500$/, '')
    })

  matchUtilities(
    {
      'style-color': value => {
        return {
          '--sc-subtle-hover': `var(--color-${value}-50)`,
          '--sc-subtle': `var(--color-${value}-100)`,
          '--sc-border': `var(--color-${value}-200)`,
          '--sc-base-hover': `var(--color-${value}-500)`,
          '--sc-base': `var(--color-${value}-600)`,
          '--sc-text': `var(--color-${value}-700)`,
        }
      },
    },
    {
      values: colorKeys.reduce((acc, key) => {
        acc[key] = key
        return acc
      }, {}),
      type: ['color'],
    }
  )
})
