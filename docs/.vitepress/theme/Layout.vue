<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed, provide, useSlots, watch } from 'vue'
import { useData } from 'vitepress'
import { useSidebar, useCloseSidebarOnEscape } from './composables/defaultTheme'
import VPHeader from './components/VPHeader.vue'
import VPSidebar from './components/VPSidebar.vue'
import VPContent from './components/VPContent.vue'
const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.layout !== false" class="isolate" :class="frontmatter.pageClass">
    <div class="fixed inset-x-0 top-0 z-10 border-b border-gray-950/5 dark:border-white/10">
      <VPHeader />
      <!-- <MobileNav header={<Header />} breadcrumb={breadcrumb}>
          <DocsSidebar />
        </MobileNav> -->
    </div>
    <div
      class="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-26.25 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] lg:pt-14.25 xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]"
    >
      <div class="relative col-start-1 row-span-full row-start-1 max-lg:hidden">
        <div class="absolute inset-0">
          <div
            class="sticky top-14.25 bottom-0 left-0 h-full max-h-[calc(100dvh-(var(--spacing)*14.25))] w-2xs overflow-y-auto p-6"
          >
            <VPSidebar />
          </div>
        </div>
      </div>

      <!-- /* Candy cane */ -->
      <div
        class="col-start-2 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"
      ></div>

      <!-- {/* Main content area */} -->
      <div class="relative row-start-1 grid grid-cols-subgrid lg:col-start-3">
        <VPContent />
      </div>

      <!-- {/* Candy cane */} -->
      <div
        class="col-start-4 row-span-5 row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 max-lg:hidden dark:[--pattern-fg:var(--color-white)]/10"
      ></div>

      <div class="col-span-full col-start-2 row-start-2 h-px bg-gray-950/5 dark:bg-white/10" />
      <div class="row-start-3 lg:col-start-3">
        <FooterSitemap class="max-w-2xl lg:max-w-5xl" />
      </div>
      <div class="col-span-full col-start-2 row-start-4 h-px bg-gray-950/5 dark:bg-white/10" />
      <div class="row-start-5 grid lg:col-start-3">
        <FooterMeta class="max-w-2xl lg:max-w-5xl" />
      </div>
    </div>
  </div>
  <Content v-else />
</template>
