<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
defineOptions({ name: 'HSidebarMenuButton' })

// TODO: Add tooltip

const props = defineProps<
  PrimitiveProps & {
    size?: 'sm' | 'default' | 'lg'
    isActive?: boolean
  }
>()
</script>
<template>
  <Primitive
    v-bind="props"
    data-slot="sidebar-menu-button"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="[
      'peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      {
        sm: 'h-7 text-xs',
        default: 'h-8 text-sm',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
      }[size || 'default'],
    ]"
  >
    <slot />
  </Primitive>
</template>
