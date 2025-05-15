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

defineOptions({ name: 'HSidebarSub' })
</script>

<template>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Item one</NavigationMenuTrigger>
    <NavigationMenuContent>
      <slot />
    </NavigationMenuContent>
  </NavigationMenuItem>
</template>
