import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import createPlugin from 'tailwindcss/plugin'

export default createPlugin(({ addComponents, addBase, theme, config }) => {
  const colors = flattenColorPalette(theme('colors'))
  console.log(colors)
  // console.log(theme('headui'))
  const { primary = 'blue', success = 'green', warning = 'yellow', danger = 'red', gray = 'stone' } = theme('headui')
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
