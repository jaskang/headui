<script lang="ts">
export const SIDEBAR_INJECTION_KEY = Symbol('sidebar') as InjectionKey<{
  current: Ref<string>
  variant: ComputedRef<'default' | 'outline'>
  size: ComputedRef<'default' | 'sm' | 'lg'>
}>
</script>

<script setup lang="ts">
import { computed, type ComputedRef, type InjectionKey, provide, type Ref, ref } from 'vue'
import { cn } from '@/lib/utils'

export type SidebarProps = {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  class?: string | string[]
}

const props = withDefaults(defineProps<SidebarProps>(), {
  variant: 'default',
  size: 'default',
})

const value = defineModel<string>('value', { required: true })

provide(SIDEBAR_INJECTION_KEY, {
  current: value,
  variant: computed(() => props.variant),
  size: computed(() => props.size),
})
</script>

<template>
  <div
    data-slot="sidebar"
    :class="cn(['bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col', props.class])"
  >
    <div v-if="$slots.header" data-slot="sidebar-header" data-sidebar="header" class="flex flex-col gap-2 p-2">
      <slot name="header" />
    </div>
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      class="flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden"
    >
      <slot />
    </div>
    <div v-if="$slots.footer" data-slot="sidebar-footer" data-sidebar="footer" class="flex flex-col gap-2 p-2">
      <slot name="footer" />
    </div>
  </div>
</template>
