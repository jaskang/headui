<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { isBrowser } from 'kotl'

import { RadioCard, RadioGroup } from '../../../src'
import VPDoc from './components/VPDoc.vue'
import VPNavBar from './components/VPNavBar.vue'
import VPPage from './components/VPPage.vue'
import { useDataByTheme } from './utils'

const { frontmatter, isDark } = useDataByTheme()

const primary = ref('indigo')
const gray = ref('gray')

watchEffect(
  () => {
    if (isBrowser()) {
      const light = {
        // --color-background: var(--color-white);
        // --color-foreground: var(--color-gray-700);

        // --color-primary-50: var(--color-indigo-50);
        // --color-primary-100: var(--color-indigo-100);
        // --color-primary-200: var(--color-indigo-200);
        // --color-primary-300: var(--color-indigo-300);
        // --color-primary-400: var(--color-indigo-400);
        // --color-primary-500: var(--color-indigo-500);
        // --color-primary-600: var(--color-indigo-600);
        // --color-primary-700: var(--color-indigo-700);
        // --color-primary-800: var(--color-indigo-800);
        // --color-primary-900: var(--color-indigo-900);
        // --color-primary-950: var(--color-indigo-950);

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
      }
      const dark = {
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
      }
      const themeVars: Record<string, string> = isDark.value ? dark : light
      Object.keys(themeVars).forEach(key => {
        document.body.style.setProperty(key, themeVars[key]!)
      })
    }
  },
  { flush: 'post' }
)
</script>

<template>
  <div class="min-h-screen">
    <VPNavBar></VPNavBar>
    <div class="flex items-center justify-center p-4">
      <div class="">主色调：</div>
      <RadioGroup class="flex gap-2" v-model:value="primary">
        <RadioCard value="orange" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-orange-500"></div>
        </RadioCard>
        <RadioCard value="yellow" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-yellow-500"></div>
        </RadioCard>
        <RadioCard value="lime" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-lime-500"></div>
        </RadioCard>
        <RadioCard value="emerald" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-emerald-500"></div>
        </RadioCard>
        <RadioCard value="teal" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-teal-500"></div>
        </RadioCard>
        <RadioCard value="cyan" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-cyan-500"></div>
        </RadioCard>
        <RadioCard value="sky" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-sky-500"></div>
        </RadioCard>
        <RadioCard value="blue" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-blue-500"></div>
        </RadioCard>
        <RadioCard value="indigo" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-indigo-500"></div>
        </RadioCard>
        <RadioCard value="violet" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-violet-500"></div>
        </RadioCard>
        <RadioCard value="purple" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-purple-500"></div>
        </RadioCard>
        <RadioCard value="fuchsia" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-fuchsia-500"></div>
        </RadioCard>
        <RadioCard value="pink" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-pink-500"></div>
        </RadioCard>
        <RadioCard value="rose" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-rose-500"></div>
        </RadioCard>
      </RadioGroup>
      <div class="mx-8 h-4 w-px bg-gray-300"></div>
      <div>灰色调：</div>
      <RadioGroup class="flex gap-2" v-model:value="gray">
        <RadioCard value="gray" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-gray-500"></div>
        </RadioCard>
        <RadioCard value="slate" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-slate-500"></div>
        </RadioCard>
        <RadioCard value="zinc" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-zinc-500"></div>
        </RadioCard>
        <RadioCard value="neutral" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-neutral-500"></div>
        </RadioCard>
        <RadioCard value="stone" class="rounded-full p-[2px]">
          <div class="h-4 w-4 rounded-full bg-stone-500"></div>
        </RadioCard>
      </RadioGroup>
    </div>
    <VPDoc v-if="frontmatter.layout !== false"></VPDoc>
    <VPPage v-else></VPPage>
  </div>
</template>
