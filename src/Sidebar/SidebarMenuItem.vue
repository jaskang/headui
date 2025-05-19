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
  <!-- 
  <template v-if="hasChildren">
    <CollapsibleRoot as="li" data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
      <CollapsibleTrigger as-child>
        <SidebarMenuButton>
          <span>{{ item.label }}</span>
          <ChevronRightIcon
            v-if="hasChildren"
            class="ml-auto transition-transform duration-200 group-data-[state=open]/menu-item:rotate-90"
          />
        </SidebarMenuButton>
      </CollapsibleTrigger>
      <CollapsibleContent
        class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden pl-4"
      >
        <SidebarMenu v-if="hasChildren" :options="item.children!" />
      </CollapsibleContent>
    </CollapsibleRoot>
  </template>
  <li v-else data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
    <SidebarMenuButton as="a" :href="item.link">
      <span>{{ item.label }}</span>
      <ChevronRightIcon
        v-if="hasChildren"
        class="ml-auto transition-transform duration-200 group-data-[state=open]/menu-item:rotate-90"
      />
    </SidebarMenuButton>
  </li> -->
</template>
