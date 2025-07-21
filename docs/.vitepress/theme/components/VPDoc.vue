<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-vue-next'
import { Button } from 'sinvue'
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import VPToc from './VPToc.vue'

const { theme } = useData()

const route = useRoute()

const pageName = computed(() => route.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
</script>

<template>
  <div data-slot="docs" class="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
    <div class="flex min-w-0 flex-1 flex-col">
      <div class="h-(--top-spacing) shrink-0"></div>
      <div
        class="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300"
      >
        <Content
          class="vp-doc prose prose-sm dark:prose-invert max-w-none"
          :class="[pageName, theme.externalLinkIcon && 'external-link-icon-enabled']"
        />
      </div>
      <div class="mx-auto flex h-16 w-full max-w-2xl items-center justify-between gap-2 px-4 md:px-0">
        <Button variant="secondary"><ArrowLeftIcon />Prev page</Button>
        <Button variant="secondary">Next page<ArrowRightIcon /></Button>
      </div>
    </div>
    <div
      class="sticky top-[calc(var(--header-height)+1px)] z-30 ml-auto hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex"
    >
      <div class="h-(--top-spacing) shrink-0"></div>
      <div class="no-scrollbar overflow-y-auto px-8">
        <VPToc>
          <template #aside-top><slot name="aside-top" /></template>
          <template #aside-bottom><slot name="aside-bottom" /></template>
          <template #aside-outline-before><slot name="aside-outline-before" /></template>
          <template #aside-outline-after><slot name="aside-outline-after" /></template>
          <template #aside-ads-before><slot name="aside-ads-before" /></template>
          <template #aside-ads-after><slot name="aside-ads-after" /></template>
        </VPToc>
      </div>
      <div class="h-12"></div>
    </div>
  </div>
</template>
