<script lang="ts" setup>
import { ref } from 'vue'
import { useThemeStore } from '../composables/theme'
import { Select } from 'tailv'
import { storeToRefs } from 'pinia'
const store = useThemeStore()
const { primary } = storeToRefs(store)
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10">
    <div class="bg-white dark:bg-gray-950">
      <div class="flex h-14 items-center justify-between gap-8 px-4 sm:px-6">
        <div class="flex items-center gap-4">
          <a class="shrink-0" aria-label="Home" href="/"> Head UI </a>
        </div>
        <div class="flex items-center gap-6 max-md:hidden">
          <Select
            class="shadow-none!"
            v-model:value="primary"
            :options="[
              { value: 'red', label: 'red' },
              { value: 'orange', label: 'orange' },
              { value: 'amber', label: 'amber' },
              { value: 'yellow', label: 'yellow' },
              { value: 'lime', label: 'lime' },
              { value: 'green', label: 'green' },
              { value: 'emerald', label: 'emerald' },
              { value: 'teal', label: 'teal' },
              { value: 'cyan', label: 'cyan' },
              { value: 'sky', label: 'sky' },
              { value: 'blue', label: 'blue' },
              { value: 'indigo', label: 'indigo' },
              { value: 'violet', label: 'violet' },
              { value: 'purple', label: 'purple' },
              { value: 'fuchsia', label: 'fuchsia' },
              { value: 'pink', label: 'pink' },
              { value: 'rose', label: 'rose' },
            ]"
          />
          <a class="text-sm/6 text-gray-950 dark:text-white" href="/docs">Docs</a>
          <a class="text-sm/6 text-gray-950 dark:text-white" href="/blog">Blog</a>
          <a class="text-sm/6 text-gray-950 dark:text-white" href="/showcase">Showcase</a>
        </div>
        <div class="flex items-center gap-2.5 md:hidden"></div>
      </div>
    </div>
    <div
      class="flex h-14 items-center border-t border-gray-950/5 bg-white px-4 sm:px-6 lg:hidden dark:border-white/10 dark:bg-gray-950"
    >
      <button
        type="button"
        class="relative -ml-1.5 inline-grid size-7 place-items-center rounded-md text-gray-950 hover:bg-gray-950/5 dark:text-white dark:hover:bg-white/10"
        aria-label="Open navigation menu"
      >
        <span class="absolute top-1/2 left-1/2 size-11 -translate-1/2 pointer-fine:hidden"></span
        ><svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
          <path
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <ol class="sticky ml-4 flex min-w-0 items-center gap-2 text-sm/6 whitespace-nowrap">
        <li class="flex items-center gap-2">
          <span class="text-gray-500 dark:text-gray-400">Core concepts</span
          ><svg viewBox="0 0 16 16" class="size-4 fill-gray-950 dark:fill-gray-500">
            <path
              fill-rule="evenodd"
              d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
        <li class="truncate text-gray-950 dark:text-white">Hover, focus, and other states</li>
      </ol>
    </div>
  </div>
</template>
