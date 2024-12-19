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
      '.variant-default': {
        '--hvt-color': `inherit`,
        '--hvt-bg': `var(--color-white)`,
        '--hvt-border': `var(--color-${gray}-200)`,
        color: 'var(--hvt-color)',
        backgroundColor: 'var(--hvt-bg)',
        borderColor: 'var(--hvt-border)',
        borderWidth: '1px',
        '&:not(:disabled)': {
          '&:hover': {
            backgroundColor: `var(--color-${gray}-50)`,
          },
        },
      },
      '.variant-solid': {
        '--hvt-color': `var(--color-white)`,
        '--hvt-bg': `var(--color-${primary}-500)`,
        '--hvt-border': `transparent`,
        color: 'var(--hvt-color)',
        backgroundColor: 'var(--hvt-bg)',
        borderColor: 'var(--hvt-border)',
      },
      '.variant-soft': {
        '--hvt-color': `var(--color-${primary}-500)`,
        '--hvt-bg': `var(--color-${primary}-100)`,
        '--hvt-border': `transparent`,
        color: 'var(--hvt-color)',
        backgroundColor: 'var(--hvt-bg)',
        borderColor: 'var(--hvt-border)',
      },
      '.variant-outline': {
        '--hvt-color': `var(--color-${primary}-500)`,
        '--hvt-bg': `var(--color-white)`,
        '--hvt-border': `var(--color-${primary}-500)`,
        color: 'var(--hvt-color)',
        backgroundColor: 'var(--hvt-bg)',
        borderColor: 'var(--hvt-border)',
      },
    },
    {}
  )
})
