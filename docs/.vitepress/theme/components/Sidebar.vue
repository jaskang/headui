<script lang="ts" setup>
import { Anchor } from 'tailv'
import { useSidebar, useCloseSidebarOnEscape } from 'vitepress/dist/client/theme-default/composables/sidebar'
import { isActive } from 'vitepress/dist/client/shared.js'
import { computed } from 'vue'

const { sidebarGroups, hasSidebar } = useSidebar()
console.log('sidebarGroups', sidebarGroups.value)

const { page, hash } = useData()

isActiveLink.value = isActive(page.value.relativePath, item.value.link)
const current = computed(() => {
  sidebarGroups.value.find(group => group.items.some(item => isActive(page.value.relativePath, item.link)))
  return items.find(isActive())
})
</script>

<template>
  <div v-if="hasSidebar" class="">
    <div v-for="(group, index) in sidebarGroups" :key="index">
      {{ group.text }}
      <Anchor :items="group.items" />
    </div>
  </div>
</template>
