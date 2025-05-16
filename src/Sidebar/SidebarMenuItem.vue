<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import SidebarMenuButton from './SidebarMenuButton.vue'

defineOptions({ name: 'HSidebarMenuItem' })

const props = defineProps<{}>()
</script>

<template>
  <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
    <SidebarMenuButton>
      <slot />
      <ChevronRightIcon />
    </SidebarMenuButton>
    <!-- <slot name="action" /> -->
  </li>
</template>
