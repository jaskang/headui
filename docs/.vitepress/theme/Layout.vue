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
        <VPSidebar class="h-full overflow-auto bg-transparent py-6 pr-4 lg:py-8" />
        <VPContent />
      </div>
    </main>
    <VPFooter />
  </div>
  <Content v-else />
</template>
