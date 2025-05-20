<script setup lang="ts">
defineOptions({ name: 'HSidebarMenuSub' })
</script>
<template>
  <ul
    data-slot="sidebar-menu-sub"
    data-sidebar="menu-sub"
    :class="[
      'border-sidebar-border ml-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
    ]"
  >
    <slot />
  </ul>
</template>
