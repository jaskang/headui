import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import createPlugin from 'tailwindcss/plugin'

export default createPlugin(({ matchUtilities, addUtilities, theme, config }) => {
  const colors = flattenColorPalette(theme('colors'))
  console.log(colors)
  console.log(theme('headui'))
  addUtilities(
    {
      '.bg-primary': {
        backgroundColor: colors.white!,
      },
    },
    {}
  )
})
