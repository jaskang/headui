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

  addUtilities({
    '.style-default': {
      backgroundColor: `var(--color-white)`,
      color: `var(--color-${headui.gray}-700)`,
      border: `1px solid var(--color-${headui.gray}-200)`,
      '&:hover:not(:disabled)': {
        backgroundColor: `var(--color-${headui.gray}-50)`,
      },
    },
  })
  // console.log(colorKeys)
  matchUtilities(
    {
      'style-solid': value => {
        return isGray(value)
          ? {
              backgroundColor: `var(--color-${value}-200)`,
              color: `var(--color-${value}-700)`,
            }
          : {
              backgroundColor: `var(--color-${value}-500)`,
              color: `var(--color-${value}-50)`,
              '&:hover:not(:disabled)': {
                backgroundColor: `var(--color-${value}-600)`,
              },
            }
      },
      'style-soft': value => {
        return isGray(value)
          ? {
              backgroundColor: `var(--color-${value}-100)`,
              color: `var(--color-${value}-700)`,
            }
          : {
              backgroundColor: `var(--color-${value}-100)`,
              color: `var(--color-${value}-600)`,
            }
      },
      'style-outline': value => {
        return isGray(value)
          ? {
              border: `1px solid ${`var(--color-${value}-500)`}`,
              backgroundColor: 'var(--color-white)',
              color: `var(--color-${value}-00)`,
              '&:enabled:hover': {
                backgroundColor: `var(--color-${value}-50)`,
              },
            }
          : {
              border: `1px solid ${`var(--color-${value}-500)`}`,
              backgroundColor: 'var(--color-white)',
              color: `var(--color-${value}-500)`,
              '&:enabled:hover': {
                backgroundColor: `var(--color-${value}-100)`,
              },
            }
      },
      'style-text': value => {
        return isGray(value)
          ? {
              backgroundColor: 'transparent',
              color: `var(--color-${value}-700)`,
            }
          : {
              backgroundColor: 'transparent',
              color: `var(--color-${value}-500)`,
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
