<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, provide, useSlots, watch } from 'vue'
import VPContent from './components/VPContent.vue'
import VPHeader from './components/VPHeader.vue'
import VPSidebar from './components/VPSidebar.vue'
import { useCloseSidebarOnEscape, useSidebar } from './composables/defaultTheme'
import { useThemeStore } from './composables/theme'
const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useSidebar()

const route = useRoute()
watch(() => route.path, closeSidebar)

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

const { frontmatter } = useData()
const theme = useThemeStore()
</script>

<template>
  <div
    :style="theme.themeVars"
    v-if="frontmatter.layout !== false"
    class="bg-background relative flex min-h-svh flex-col"
    :class="frontmatter.pageClass"
  >
    <div class="border-grid flex flex-1 flex-col">
      <VPHeader />
      <main class="flex flex-1 flex-col">
        <div class="container-wrapper">
          <div
            class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
          >
            <aside
              class="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block"
            >
              <div class="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
                <VPSidebar />
              </div>
            </aside>
            <VPContent />
            <!-- <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
              <div class="mx-auto w-full max-w-2xl min-w-0">
              </div>
            </main> -->
          </div>
        </div>
      </main>
      <footer class="border-grid border-t py-6 md:py-0">
        <div class="container-wrapper">
          <div class="container py-4">
            <div class="text-muted-foreground text-center text-sm leading-loose text-balance md:text-left">
              Built by<!-- -->
              <a
                href="https://twitter.com/shadcn"
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4"
                >shadcn</a
              >. The source code is available on<!-- -->
              <a
                href="https://github.com/shadcn-ui/ui"
                target="_blank"
                rel="noreferrer"
                class="font-medium underline underline-offset-4"
                >GitHub</a
              >.
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <Content v-else />
</template>
