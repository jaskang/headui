<script lang="ts" setup>
import { Anchor } from 'sinvue'

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
      key: item.link,
      label: item.title,
      link: item.link,
    })),
  }))
})
console.log('groups', groups.value)
const { page, hash } = useData()

const matchItems = (items: any[]) => {
  console.log('items', page.value.relativePath, items)
  return items.findIndex(item => isActive(page.value.relativePath, item.link))
}
const current = computed(() => {
  for (const group of sidebarGroups.value) {
    const index = matchItems(group.items)
    if (index !== -1) {
      console.log('matchItems', group.text, index)
      return { group: group.text, index }
    }
  }
  return { group: '', index: -1 }
})
</script>

<template>
  <HSidebar :options="groups" />
</template>
