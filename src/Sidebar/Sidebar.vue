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
import SidebarGroup from './SidebarGroup.vue'
import SidebarMenu from './SidebarMenu.vue'
import { type ISidebarGroup, type ISidebarItem, isSidebarGroup } from './types'

defineOptions({ name: 'HSidebar' })

const props = withDefaults(
  defineProps<{
    options: ISidebarItem[] | ISidebarGroup[]
    size?: 'sm' | 'default' | 'lg'
  }>(),
  {
    size: 'default',
  }
)

const groups = computed(() =>
  props.options.reduce((acc, item) => {
    let prevGroup = acc[acc.length - 1]
    if (isSidebarGroup(item)) {
      acc.push(item)
    } else {
      if (prevGroup && !prevGroup.label) {
        prevGroup.children.push(item)
      } else {
        acc.push({
          label: '',
          type: 'group',
          children: [item],
        })
      }
    }
    return acc
  }, [] as ISidebarGroup[])
)
</script>

<template>
  <div data-slot="sidebar" class="bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col">
    <div v-if="$slots.header" data-slot="sidebar-header" data-sidebar="header" class="flex flex-col gap-2 p-2">
      <slot name="header" />
    </div>
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
    >
      <template v-for="group in groups" :key="group.label">
        <SidebarGroup v-if="group.label" :label="group.label">
          <SidebarMenu :options="group.children" />
        </SidebarGroup>
        <SidebarMenu v-else :options="group.children" />
      </template>
    </div>
    <div v-if="$slots.footer" data-slot="sidebar-footer" data-sidebar="footer" class="flex flex-col gap-2 p-2">
      <slot name="footer" />
    </div>
  </div>
</template>
