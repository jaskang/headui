<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  type PopoverContentProps,
  PopoverPortal,
  PopoverRoot,
  type PopoverRootProps,
  PopoverTrigger,
} from 'reka-ui'
import { type PropType, ref } from 'vue'

defineOptions({ name: 'HPopover' })
const props = defineProps<
  Omit<PopoverContentProps, 'as' | 'asChild'> & {
    defaultOpen?: boolean
    modal?: boolean
  }
>()
const open = defineModel<boolean>('open')
</script>
<template>
  <PopoverRoot v-model:open="open" :defaultOpen="defaultOpen" :modal="modal">
    <PopoverTrigger as-child>
      <slot />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        v-bind="props"
        data-slot="popover-content"
        :arrowPadding="-1"
        :class="[
          'bg-popover text-popover-foreground z-50 rounded-md border p-4 shadow-md outline-hidden',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2',
          'origin-(--reka-popover-content-transform-origin)',
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        ]"
      >
        <slot name="content"></slot>
        <PopoverArrow class="fill-popover stroke-border" />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
