<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
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
        <CollapsibleRoot class="group/collapsible">
          <SidebarMenuSubItem>
            <CollapsibleTrigger as-child>
              <SidebarMenuButton>
                {{ option.label }}
                <ChevronRightIcon
                  class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent
              class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden"
            >
              <SidebarMenuSub>
                <SidebarMenuSubItem v-for="child in option.children" :key="child.label">
                  <SidebarMenuSubButton as="a" :href="child.link">
                    {{ child.label }}
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuSubItem>
        </CollapsibleRoot>
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
