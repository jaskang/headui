<script lang="ts">
export const SIDEBAR_INJECTION_KEY = Symbol('sidebar') as InjectionKey<{
  current: Ref<string>
}>
</script>

<script setup lang="ts">
import { type InjectionKey, provide, type Ref, ref } from 'vue'

export type SidebarProps = {
  value?: string
}

const props = defineProps<SidebarProps>()
const value = defineModel<string>('value', { required: true })

provide(SIDEBAR_INJECTION_KEY, {
  current: value,
})
</script>

<template>
  <div data-slot="sidebar" class="bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col">
    <div data-slot="sidebar-header" data-sidebar="header" class="flex flex-col gap-2 p-2">
      <slot name="header" />
    </div>
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
    >
      <slot />
    </div>
    <div data-slot="sidebar-footer" data-sidebar="footer" class="flex flex-col gap-2 p-2">
      <slot name="footer" />
    </div>
  </div>
</template>
