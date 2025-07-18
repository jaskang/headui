<script setup lang="ts">
import type { ClassValue } from 'kotl'
import { ScrollAreaRoot, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from 'reka-ui'
import { computed, ref } from 'vue'
import { cn, type OverrideClass } from '@/lib/utils'

type ScrollAreaProps = {
  orientation?: 'horizontal' | 'vertical'
}

defineOptions({ name: 'ScrollArea' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = withDefaults(defineProps<ScrollAreaProps & { class?: ClassValue }>(), {
  orientation: 'vertical',
})
</script>
<template>
  <ScrollAreaRoot data-slot="scroll-area" :class="cn('relative', props.class)" style="--scrollbar-size: 10px">
    <!-- <div class="absolute top-0 z-10 h-6 w-full bg-gradient-to-t from-transparent to-white" /> -->
    <ScrollAreaViewport
      data-slot="scroll-area-viewport"
      class="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      :class="[
        'flex touch-none p-px transition-colors select-none',
        props.orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
        props.orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
      ]"
      :orientation="props.orientation"
    >
      <ScrollAreaThumb data-slot="scroll-area-thumb" class="bg-border relative flex-1 rounded-full" />
    </ScrollAreaScrollbar>
    <!-- <div class="absolute bottom-0 z-10 h-6 w-full bg-gradient-to-b from-transparent to-white" /> -->
  </ScrollAreaRoot>
</template>
