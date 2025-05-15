<script setup lang="ts">
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuSub,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'reka-ui'

defineOptions({ name: 'HSidebarGroup' })

const props = defineProps<{
  label: string
}>()
</script>
<template>
  <div
    data-slot="sidebar-group"
    data-sidebar="group"
    class="relative flex w-full min-w-0 flex-col p-2 group-data-[collapsible=icon]:hidden"
  >
    <div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      class="text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0"
    >
      {{ label }}
    </div>
    <NavigationMenuList data-slot="sidebar-menu" data-sidebar="menu" class="flex w-full min-w-0 flex-col gap-1">
      <slot />
    </NavigationMenuList>
  </div>
</template>
