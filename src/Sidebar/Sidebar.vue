<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'reka-ui'
import { computed } from 'vue'
import SidebarMenu from './SidebarMenu.vue'
import type { ISidebarItem } from './types'

defineOptions({ name: 'HSidebar' })

const props = defineProps<{
  options: ISidebarItem[]
}>()
</script>

<template>
  <div data-slot="sidebar" class="bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col">
    <div data-slot="sidebar-header" data-sidebar="header" class="flex flex-col gap-2 p-2">
      <slot name="header" />
    </div>
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
    >
      <SidebarMenu :options="options" />
    </div>
    <div data-slot="sidebar-footer" data-sidebar="footer" class="flex flex-col gap-2 p-2">
      <slot name="footer" />
    </div>
  </div>
</template>
