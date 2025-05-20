<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  type DialogRootProps,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui'

defineOptions({ name: 'HSheet' })

const props = withDefaults(
  defineProps<
    Omit<DialogRootProps, 'open'> & {
      title?: string
      description?: string
      side?: 'right' | 'left' | 'top' | 'bottom'
    }
  >(),
  {
    side: 'left',
    modal: true,
  }
)

const open = defineModel<boolean>('open')
</script>

<template>
  <DialogRoot data-slot="sheet" v-bind="props" v-model:open="open">
    <DialogTrigger as-child data-slot="sheet-trigger" v-if="$slots.trigger">
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay
        data-slot="sheet-overlay"
        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50"
      />
      <DialogContent
        data-slot="sheet-content"
        :class="[
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          {
            right:
              'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
            left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
            top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
            bottom:
              'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          }[side],
        ]"
      >
        <div data-slot="sheet-header" :class="title || description ? 'flex flex-col gap-1.5 p-4' : 'hidden'">
          <DialogTitle data-slot="sheet-title" :class="title ? 'text-foreground font-semibold' : 'hidden'">
            {{ title }}
          </DialogTitle>
          <DialogDescription
            data-slot="sheet-description"
            :class="description ? 'text-muted-foreground text-sm' : 'hidden'"
          >
            {{ description }}
          </DialogDescription>
        </div>
        <slot />

        <DialogClose
          class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
        >
          <XIcon class="size-4" />
          <span class="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
