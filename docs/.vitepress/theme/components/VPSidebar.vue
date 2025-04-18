<script lang="ts" setup>
import { Anchor } from 'tailv'

import { isActive, useSidebar, useCloseSidebarOnEscape } from '../composables/defaultTheme'
import { computed } from 'vue'
import { useData } from 'vitepress'

const { sidebarGroups, hasSidebar } = useSidebar()
console.log('sidebarGroups', sidebarGroups.value)

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
  <div v-if="hasSidebar" class="flex flex-col gap-8">
    <div v-for="(group, index) in sidebarGroups" class="flex flex-col gap-3" :key="group.text">
      <h3
        class="font-mono text-sm/6 font-medium tracking-widest text-gray-500 uppercase sm:text-xs/6 dark:text-gray-400"
      >
        {{ group.text }}
      </h3>
      <Anchor :items="group.items" :current="group.text === current.group ? [current.index] : []" />
    </div>
  </div>
</template>
