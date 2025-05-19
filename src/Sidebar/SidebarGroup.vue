<script setup lang="ts">
defineOptions({ name: 'HSidebarGroup' })

const props = defineProps<{
  label?: string
}>()
</script>
<template>
  <div data-slot="sidebar-group" data-sidebar="group" class="relative flex w-full min-w-0 flex-col p-2">
    <div
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      :class="[
        'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
      ]"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </div>
    <button
      v-if="$slots.action"
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      :class="[
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
      ]"
    >
      <slot name="action" />
    </button>
    <div data-slot="sidebar-group-content" data-sidebar="group-content" class="w-full text-sm">
      <slot />
    </div>
  </div>
</template>
