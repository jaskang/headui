<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { SIDEBAR_INJECTION_KEY } from './Sidebar.vue'

export type SidebarMenuProps = {
  label?: string
  items: {
    label: string
    value: string
    icon?: string
    to?: string
    disabled?: boolean
  }[]
}
const props = withDefaults(defineProps<SidebarMenuProps>(), {})

const provider = inject(SIDEBAR_INJECTION_KEY, {
  current: ref(''),
  variant: computed(() => 'default'),
  size: computed(() => 'default'),
})
</script>

<template>
  <div data-slot="sidebar-group" data-sidebar="group" class="relative flex w-full min-w-0 flex-col p-2">
    <div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      class="text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0"
    >
      {{ label }}
    </div>
    <ul data-slot="sidebar-menu" data-sidebar="menu" class="flex w-full min-w-0 flex-col gap-1">
      <li
        v-for="item in items"
        :key="item.value"
        data-slot="sidebar-menu-item"
        data-sidebar="menu-item"
        class="group/menu-item relative"
      >
        <div
          role="button"
          data-slot="sidebar-menu-button"
          data-sidebar="menu-button"
          :data-size="provider?.size.value"
          :data-active="provider?.current.value === item.value"
          :class="[
            'peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
            {
              default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              outline:
                'bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
            }[provider?.variant.value],
            {
              default: 'h-8 text-sm',
              sm: 'h-7 text-xs',
              lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
            }[provider?.size.value],
          ]"
        >
          {{ item.icon }}
          {{ item.label }}
        </div>
      </li>
    </ul>
  </div>
</template>
