import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import createPlugin from 'tailwindcss/plugin'

export default createPlugin(({ addComponents, addBase, theme, config }) => {
  const colors = flattenColorPalette(theme('colors'))
  console.log(theme('colors'))
  console.log(theme('headui'))
  const { primary = 'blue', success = 'green', warning = 'yellow', danger = 'red', gray = 'stone' } = theme('headui')
  // 'solid' | 'soft' | 'outline' | 'text' | 'pure' | 'default'
  addBase({
    ':root': {},
  })
  addComponents(
    {
      '.variant-solid': {
        '--variant-color': `var(--color-white)`,
        '--variant-bg': `var(--color-${primary}-500)`,
        color: 'var(--variant-color)',
        backgroundColor: 'var(--variant-bg)',
        borderColor: 'transparent',
      },
      '.variant-soft': {
        '--variant-color': `var(--color-${primary}-500)`,
        '--variant-bg': `var(--color-${primary}-100)`,
        color: 'var(--variant-color)',
        backgroundColor: 'var(--variant-bg)',
        borderColor: 'transparent',
      },
      '.variant-outline': {
        '--variant-color': `var(--color-${primary}-500)`,
        '--variant-bg': `var(--color-white)`,
        '--variant-border': `var(--color-${primary}-500)`,
        color: 'var(--variant-color)',
        backgroundColor: 'var(--variant-bg)',
        borderColor: 'var(--variant-border)',
      },
    },
    {}
  )
})
