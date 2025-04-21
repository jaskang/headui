<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import VPToc from './VPToc.vue'
import VPDocFooter from './VPDocFooter.vue'
import { useSidebar, usePrevNext } from '../composables/defaultTheme'

const { theme } = useData()

const route = useRoute()
const { hasSidebar, hasAside, leftAside } = useSidebar()

const control = usePrevNext()

const pageName = computed(() => route.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
</script>

<template>
  <div
    :class="[
      'mx-auto grid w-full max-w-2xl grid-cols-1 gap-10',
      'xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]',
    ]"
  >
    <div class="px-4 pt-10 pb-24 sm:px-6 xl:pr-0">
      <Content
        class="vp-doc prose prose-sm dark:prose-invert max-w-none"
        :class="[pageName, theme.externalLinkIcon && 'external-link-icon-enabled']"
      />
      <footer class="mt-16 text-sm leading-6">
        <div class="flex items-center justify-between gap-2 text-gray-700 dark:text-gray-200">
          <a class="group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" :href="control.prev?.link">
            <svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path
                fill-rule="evenodd"
                d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Prev page</span>
          </a>
          <a class="group flex items-center gap-2 hover:text-gray-900 dark:hover:text-white" :href="control.next?.link">
            <span>Next page</span>
            <svg viewBox="0 0 16 16" fill="currentColor" class="size-4">
              <path
                fill-rule="evenodd"
                d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
    <div class="max-xl:hidden">
      <div class="sticky top-14 max-h-[calc(100svh-3.5rem)] overflow-x-hidden px-6 pt-10 pb-24">
        <div class="flex flex-col gap-3">
          <h3
            class="font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400"
          >
            On this page
          </h3>
          <VPToc>
            <template #aside-top><slot name="aside-top" /></template>
            <template #aside-bottom><slot name="aside-bottom" /></template>
            <template #aside-outline-before><slot name="aside-outline-before" /></template>
            <template #aside-outline-after><slot name="aside-outline-after" /></template>
            <template #aside-ads-before><slot name="aside-ads-before" /></template>
            <template #aside-ads-after><slot name="aside-ads-after" /></template>
          </VPToc>
        </div>
      </div>
    </div>
  </div>
</template>
