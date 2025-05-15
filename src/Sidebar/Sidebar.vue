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
import SidebarGroup from './SidebarGroup.vue'
import SidebarSub from './SidebarSub.vue'
defineOptions({ name: 'HSidebar' })
</script>

<template>
  <NavigationMenuRoot
    orientation="vertical"
    disable-hover-trigger
    disable-pointer-leave-close
    class="flex flex-col gap-4"
  >
    <div data-slot="sidebar-header" data-sidebar="header" class="flex flex-col gap-2 p-2">
      <slot name="header" />
    </div>
    <SidebarGroup label="Components">
      <NavigationMenuItem data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
        <NavigationMenuLink
          data-slot="sidebar-menu-button"
          data-sidebar="menu-button"
          class="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
        >
          Item one
        </NavigationMenuLink>
      </NavigationMenuItem>
      <SidebarSub>
        <NavigationMenuItem data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
          <NavigationMenuLink
            data-slot="sidebar-menu-button"
            data-sidebar="menu-button"
            class="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
          >
            Item two
          </NavigationMenuLink>
        </NavigationMenuItem>
      </SidebarSub>
      <NavigationMenuItem data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
        <NavigationMenuLink
          data-slot="sidebar-menu-button"
          data-sidebar="menu-button"
          class="peer/menu-button ring-sidebar-ring active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex h-8 w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
        >
          Item two
        </NavigationMenuLink>
      </NavigationMenuItem>
    </SidebarGroup>
    <div data-slot="sidebar-footer" data-sidebar="footer" class="flex flex-col gap-2 p-2">
      <slot name="footer" />
    </div>
  </NavigationMenuRoot>
</template>
