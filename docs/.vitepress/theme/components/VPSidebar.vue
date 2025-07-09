<script lang="ts" setup>
import { Sidebar, SidebarMenu } from 'sinvue'

import { useData } from 'vitepress'
import { computed } from 'vue'
import { isActive, useCloseSidebarOnEscape, useSidebar } from '../composables/defaultTheme'

const { sidebarGroups, hasSidebar } = useSidebar()
console.log('sidebarGroups', sidebarGroups.value)
const groups = computed(() => {
  return sidebarGroups.value.map(group => ({
    label: group.text,
    type: 'group',
    children: group.items.map(item => ({
      label: item.title,
      value: item.link,
      link: item.link,
    })),
  }))
})
console.log('groups', groups.value)
const { page, hash } = useData()

const matchItems = (items: any[]) => {
  console.log('items', page.value.relativePath, items)
  return items.find(item => isActive(page.value.relativePath, item.value))
}
const current = computed(() => {
  for (const group of sidebarGroups.value) {
    const item = matchItems(group.items)
    if (item) {
      console.log('matchItems', group.text, item)
      return item.value
    }
  }
  return null
})
</script>

<template>
  <Sidebar :value="current">
    <SidebarMenu v-for="group in groups" :key="group.label" :label="group.label" :items="group.children" />
  </Sidebar>
</template>
