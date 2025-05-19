<script setup lang="ts">
defineOptions({ name: 'HSidebarMenuTitle' })
</script>
<template>
  <li data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-title relative">
    <div
      data-slot="sidebar-menu-title"
      data-sidebar="menu-title"
      :class="[
        'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium transition-[margin,opacity] duration-200 ease-linear outline-none group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      ]"
    >
      <slot />
    </div>
  </li>
</template>
