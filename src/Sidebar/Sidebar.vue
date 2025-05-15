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

defineOptions({ name: 'HSidebar' })
</script>

<template>
  <NavigationMenuRoot orientation="vertical" disable-hover-trigger disable-pointer-leave-close>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink>Item one</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink>Item two</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
  <div class="flex flex-col gap-4">
    <div data-slot="sidebar-header" data-sidebar="header" class="flex flex-col gap-2 p-2">
      <slot name="header" />
    </div>
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
    >
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
          Components
        </div>
      </div>
    </div>
    <div data-slot="sidebar-footer" data-sidebar="footer" class="flex flex-col gap-2 p-2">
      <slot name="footer" />
    </div>
  </div>
</template>
