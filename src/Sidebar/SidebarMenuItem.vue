<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
import { computed } from 'vue'
import SidebarMenu from './SidebarMenu.vue'
import SidebarMenuButton from './SidebarMenuButton.vue'
import type { ISidebarItem } from './types'

defineOptions({ name: 'HSidebarMenuItem' })

const props = defineProps<{
  item: ISidebarItem
}>()

const hasChildren = computed(() => props.item.children && props.item.children.length > 0)
</script>

<template>
  <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
    <slot />
  </li>
</template>
