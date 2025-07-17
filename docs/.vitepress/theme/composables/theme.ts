import { defineStore } from 'pinia'
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const primary = ref('blue')
  const gray = ref('gray')

  const themeVars = computed(() => {
    return {
      '--color-foreground': `var(--color-${gray.value}-700)`,
      '--color-background': `var(--color-white)`,

      '--color-primary-50': `var(--color-${primary.value}-50)`,
      '--color-primary-100': `var(--color-${primary.value}-100)`,
      '--color-primary-200': `var(--color-${primary.value}-200)`,
      '--color-primary-300': `var(--color-${primary.value}-300)`,
      '--color-primary-400': `var(--color-${primary.value}-400)`,
      '--color-primary-500': `var(--color-${primary.value}-500)`,
      '--color-primary-600': `var(--color-${primary.value}-600)`,
      '--color-primary-700': `var(--color-${primary.value}-700)`,
      '--color-primary-800': `var(--color-${primary.value}-800)`,
      '--color-primary-900': `var(--color-${primary.value}-900)`,
      '--color-primary-950': `var(--color-${primary.value}-950)`,

      ...(gray.value === 'gray'
        ? {}
        : {
            '--color-gray-50': `var(--color-${gray.value}-50)`,
            '--color-gray-100': `var(--color-${gray.value}-100)`,
            '--color-gray-200': `var(--color-${gray.value}-200)`,
            '--color-gray-300': `var(--color-${gray.value}-300)`,
            '--color-gray-400': `var(--color-${gray.value}-400)`,
            '--color-gray-500': `var(--color-${gray.value}-500)`,
            '--color-gray-600': `var(--color-${gray.value}-600)`,
            '--color-gray-700': `var(--color-${gray.value}-700)`,
            '--color-gray-800': `var(--color-${gray.value}-800)`,
            '--color-gray-900': `var(--color-${gray.value}-900)`,
            '--color-gray-950': `var(--color-${gray.value}-950)`,
          }),
    }
  })
  return {
    primary,
    gray,
    themeVars,
  }
})

