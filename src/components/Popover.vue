<script setup lang="ts">
import {
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  type PopoverContentProps,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'

import { computed, ref } from 'vue'

export type PopoverProps = {
  defaultOpen?: boolean
  modal?: boolean

  align?: PopoverContentProps['align']
  side?: PopoverContentProps['side']
  sideOffset?: PopoverContentProps['sideOffset']
}

defineOptions({ name: 'Popover' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; content?(_: {}): any }>()
const props = defineProps<PopoverProps>()
const open = defineModel<boolean>('open')
</script>
<template>
  <PopoverRoot
    v-slot="{ open: innerOpen }"
    data-slot="popover"
    :default-open="props.defaultOpen"
    :modal="props.modal"
    v-model:open="open"
  >
    <PopoverTrigger data-slot="popover-trigger" as-child><slot :open="innerOpen" /></PopoverTrigger>
    <PopoverPortal>
      <PopoverContent
        data-slot="popover-content"
        :align="props.align"
        :side="props.side"
        :side-offset="props.sideOffset"
        class="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden"
      >
        <slot name="content"></slot>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
