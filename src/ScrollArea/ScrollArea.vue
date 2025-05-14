<script setup lang="ts">
import {
  ScrollAreaRoot,
  type ScrollAreaRootProps,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from 'reka-ui'
import { computed, onMounted, type PropType, ref } from 'vue'

defineOptions({ name: 'HScrollArea' })
const emit = defineEmits<{ click: [any]; resize: [entries: ReadonlyArray<ResizeObserverEntry>] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = withDefaults(
  defineProps<
    Omit<ScrollAreaRootProps, 'as' | 'asChild'> & {
      direction: 'vertical' | 'horizontal' | 'both'
    }
  >(),
  {
    direction: 'vertical',
  }
)
</script>
<template>
  <ScrollAreaRoot class="relative rounded-md border" v-bind="props">
    <!-- <div class="absolute top-0 z-10 h-6 w-full bg-gradient-to-t from-transparent to-white" /> -->
    <ScrollAreaViewport
      class="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
    >
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation="vertical"
      class="flex h-full w-2.5 touch-none border-l border-l-transparent p-px transition-colors select-none"
      v-if="props.direction !== 'horizontal'"
    >
      <ScrollAreaThumb data-slot="scroll-area-thumb" class="bg-border relative flex-1 rounded-full" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      class="flex h-2.5 touch-none flex-col border-t border-t-transparent p-px transition-colors select-none"
      orientation="horizontal"
      v-if="props.direction !== 'vertical'"
    >
      <ScrollAreaThumb data-slot="scroll-area-thumb" class="bg-border relative flex-1 rounded-full" />
    </ScrollAreaScrollbar>
    <!-- <div class="absolute bottom-0 z-10 h-6 w-full bg-gradient-to-b from-transparent to-white" /> -->
  </ScrollAreaRoot>
</template>
