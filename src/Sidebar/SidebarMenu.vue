<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'
import SidebarMenuAction from './SidebarMenuAction.vue'
import SidebarMenuButton from './SidebarMenuButton.vue'
import SidebarMenuSub from './SidebarMenuSub.vue'
import SidebarMenuSubButton from './SidebarMenuSubButton.vue'
import SidebarMenuSubItem from './SidebarMenuSubItem.vue'

import type { ISidebarItem } from './types'

defineOptions({ name: 'HSidebarMenu' })

const props = defineProps<{
  options: ISidebarItem[]
}>()
</script>

<template>
  <ul data-slot="sidebar-menu" data-sidebar="menu" class="flex w-full min-w-0 flex-col gap-1">
    <template v-for="option in options" :key="option.label">
      <template v-if="option.children && option.children.length > 0">
        <SidebarMenuSubItem>
          <SidebarMenuButton>
            {{ option.label }}
          </SidebarMenuButton>
          <SidebarMenuSub>
            <SidebarMenuSubItem v-for="child in option.children" :key="child.label">
              <SidebarMenuSubButton>
                {{ child.label }}
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </SidebarMenuSubItem>
      </template>
      <template v-else>
        <SidebarMenuSubItem>
          <SidebarMenuButton as="a" :href="option.link">
            {{ option.label }}
          </SidebarMenuButton>
          <SidebarMenuAction></SidebarMenuAction>
        </SidebarMenuSubItem>
      </template>
    </template>
  </ul>
</template>
