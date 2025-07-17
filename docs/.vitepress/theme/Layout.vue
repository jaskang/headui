<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, provide, useSlots, watch } from 'vue'
import VPContent from './components/VPContent.vue'
import VPFooter from './components/VPFooter.vue'
import VPHeader from './components/VPHeader.vue'
import VPSidebar from './components/VPSidebar.vue'
import { useLayout } from './composables/defaultTheme'
import { useThemeStore } from './composables/theme'
const layout = useLayout()

console.log('layout', layout)

const route = useRoute()

const { frontmatter } = useData()
const theme = useThemeStore()
</script>

<template>
  <div
    :style="theme.themeVars"
    v-if="frontmatter.layout !== false"
    class="bg-background relative z-10 flex min-h-svh flex-col [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]"
    :class="frontmatter.pageClass"
  >
    <VPHeader />
    <main class="flex flex-1 flex-col">
      <div class="container-wrapper flex flex-1 flex-col px-2">
        <div
          data-slot="sidebar-wrapper"
          class="group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar 3xl:fixed:container 3xl:fixed:px-3 flex min-h-min w-full flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]"
          style="--sidebar-width: 16rem; --sidebar-width-icon: 3rem"
        >
          <VPSidebar
            class="text-sidebar-foreground sticky top-[calc(var(--header-height)+1px)] z-30 hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] w-(--sidebar-width) flex-col bg-transparent lg:flex"
          />
          <VPContent />
        </div>
      </div>
    </main>
    <VPFooter />
  </div>
  <Content v-else />
</template>
