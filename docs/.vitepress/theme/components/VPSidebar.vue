<script lang="ts" setup>
import { Sidebar, SidebarMenu } from 'sinvue'

import { useData } from 'vitepress'
import { computed } from 'vue'
import { isActive, useLayout } from '../composables/defaultTheme'

const { sidebarGroups, hasSidebar } = useLayout()
const { page, hash } = useData()

const convertItems = (items: any) => {
  return items.map((item: any) => ({
    label: item.text,
    href: item.link,
    value: item.link,
    // items: item.items ? convertItems(item.items) : undefined,
  }))
}

const matchItems = (items: any[]) => {
  console.log('items', page.value.relativePath, items)
  return items.find(item => isActive(page.value.relativePath, item.link))
}
const current = computed(() => {
  for (const group of sidebarGroups.value) {
    const item = matchItems(group.items)
    if (item) {
      console.log('matchItems', group.text, item)
      return item.link
    }
  }
  return null
})
</script>

<template>
  <div>
    <Sidebar :value="current" class="no-scrollbar bg-transparent">
      <SidebarMenu
        v-for="group in sidebarGroups"
        :key="group.text"
        :label="group.text"
        :items="convertItems(group.items)"
      />
    </Sidebar>
  </div>
</template>
