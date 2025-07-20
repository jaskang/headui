<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

type SheetProps = {
  side?: 'left' | 'right' | 'top' | 'bottom'
  title?: string
  description?: string
}

defineOptions({ name: 'Sheet' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{
  default?(_: {}): any
  title?(_: {}): any
  description?(_: {}): any
  content?(_: {}): any
  footer?(_: {}): any
}>()
const props = withDefaults(defineProps<SheetProps>(), {
  side: 'right',
})
</script>
<template>
  <DialogRoot>
    <DialogTrigger asChild>
      <slot />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        data-slot="sheet-overlay"
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
      />
      <DialogContent
        data-slot="sheet-content"
        :class="
          cn(
            'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
            side === 'right' &&
              'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
            side === 'left' &&
              'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
            side === 'top' &&
              'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
            side === 'bottom' &&
              'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t'
          )
        "
      >
        <div data-slot="sheet-header" class="flex flex-col gap-1.5 p-4">
          <DialogTitle data-slot="sheet-title" class="text-foreground font-semibold">
            <slot name="title">{{ props.title }}</slot>
          </DialogTitle>
          <DialogDescription data-slot="sheet-description" class="text-muted-foreground text-sm">
            <slot name="description">{{ props.description }}</slot>
          </DialogDescription>
        </div>
        <slot name="content"></slot>
        <div data-slot="sheet-footer" class="mt-auto flex flex-col gap-2 p-4">
          <slot name="footer"></slot>
        </div>
        <DialogClose
          class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
        >
          <XIcon class="size-4" />
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
