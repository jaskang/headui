<script setup lang="ts"></script>

<template>
  <Separator data-slot="sidebar-separator" data-sidebar="separator" class="bg-sidebar-border mx-2 w-auto" />
</template>
<!-- 

function SidebarSeparator({ class, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      class={cn('bg-sidebar-border mx-2 w-auto', class)}
      {...props}
    />
  )
} -->
