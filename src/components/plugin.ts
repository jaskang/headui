import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import createPlugin from 'tailwindcss/plugin'

export default createPlugin(({ matchUtilities, addBase, theme, config }) => {
  const colors = flattenColorPalette(theme('colors'))
  const colorKeys = Object.keys(colors)
    .filter(key => key.endsWith('-500'))
    .reduce(
      (acc, key) => {
        const k = key.replace('-500', '')
        acc[k] = k
        return acc
      },
      {} as Record<string, string>
    )
  // console.log(theme('headui'))
  const { primary = 'blue', success = 'green', warning = 'yellow', danger = 'red', gray = 'stone' } = theme('headui')

  matchUtilities(
    {
      'variant-color': value => {
        return {
          '--color-variant-50': `var(--color-${value}-50)`,
          '--color-variant-100': `var(--color-${value}-100)`,
          '--color-variant-200': `var(--color-${value}-200)`,
          '--color-variant-300': `var(--color-${value}-300)`,
          '--color-variant-400': `var(--color-${value}-400)`,
          '--color-variant-500': `var(--color-${value}-500)`,
          '--color-variant-600': `var(--color-${value}-600)`,
          '--color-variant-700': `var(--color-${value}-700)`,
          '--color-variant-800': `var(--color-${value}-800)`,
          '--color-variant-900': `var(--color-${value}-900)`,
          '--color-variant-950': `var(--color-${value}-950)`,
        }
      },
    },
    {
      values: colorKeys,
    }
  )
  // 'solid' | 'soft' | 'outline' | 'text' | 'pure' | 'default'
  // addBase({
  //   ':root': {},
  // })
  // addComponents(
  //   {
  //     '.variant-default': {
  //       color: 'inherit',
  //       backgroundColor: 'var(--color-white)',
  //       border: '1px solid var(--color-natural-200)',
  //       '&:not(:disabled)': {
  //         '&:hover': {
  //           backgroundColor: `var(--color-natural-50)`,
  //         },
  //       },
  //     },
  //     '.variant-solid': {
  //       '--hvt-color': `var(--color-white)`,
  //       '--hvt-bg': `var(--color-primary-500)`,
  //       '--hvt-border': `transparent`,
  //       color: 'var(--hvt-color)',
  //       backgroundColor: 'var(--hvt-bg)',
  //       borderColor: 'var(--hvt-border)',
  //     },
  //     '.variant-soft': {
  //       '--hvt-color': `var(--color-primary-500)`,
  //       '--hvt-bg': `var(--color-primary-100)`,
  //       '--hvt-border': `transparent`,
  //       color: 'var(--hvt-color)',
  //       backgroundColor: 'var(--hvt-bg)',
  //       borderColor: 'var(--hvt-border)',
  //     },
  //     '.variant-outline': {
  //       '--hvt-color': `var(--color-primary-500)`,
  //       '--hvt-bg': `var(--color-white)`,
  //       '--hvt-border': `var(--color-primary-500)`,
  //       color: 'var(--hvt-color)',
  //       backgroundColor: 'var(--hvt-bg)',
  //       borderColor: 'var(--hvt-border)',
  //     },
  //     '.variant-text': {
  //       '--hvt-color': `var(--color-primary-500)`,
  //       '--hvt-bg': `var(--color-white)`,
  //       '--hvt-border': `var(--color-primary-500)`,
  //       color: 'var(--hvt-color)',
  //       backgroundColor: 'var(--hvt-bg)',
  //       borderColor: 'var(--hvt-border)',
  //     },
  //   },
  //   {}
  // )
})
