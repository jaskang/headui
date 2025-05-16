<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import SidebarMenuItem from './SidebarMenuItem.vue'
import SidebarMenuTitle from './SidebarMenuTitle.vue'
import type { ISidebarItem } from './types'

defineOptions({ name: 'HSidebarMenu' })

const props = defineProps<{
  options: ISidebarItem[]
}>()

const flatOptions = (options: ISidebarItem[]) => {
  return options.reduce((acc, option) => {
    if ('type' in option && option.type === 'group') {
      acc.push({ label: option.label, type: 'group' })
      acc.push(...flatOptions(option.children || []))
    } else {
      acc.push({
        label: option.label,
        type: 'item',
        link: option.link,
        icon: option.icon,
        children: option.children ? flatOptions(option.children) : [],
      })
    }
    return acc
  }, [] as ISidebarItem[])
}

const options = computed(() => flatOptions(props.options))
</script>

<template>
  <ul data-slot="sidebar-menu" data-sidebar="menu" class="flex w-full min-w-0 flex-col gap-1">
    <template v-for="option in options" :key="option.label">
      <SidebarMenuTitle v-if="option.type === 'group'">
        <span>{{ option.label }}</span>
      </SidebarMenuTitle>
      <SidebarMenuItem v-else :item="option" />
    </template>
  </ul>
</template>
