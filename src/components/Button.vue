<script setup lang="ts">
import type { ClassValue } from 'kotl'

import { LoaderCircleIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { cn, type ThemeSize } from '../lib/utils'

export type ButtonProps = {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  size?: ThemeSize
  pill?: boolean
  square?: boolean
  disabled?: boolean
  loading?: boolean
}

const emit = defineEmits<{ click: [event: MouseEvent] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = withDefaults(defineProps<ButtonProps & { class?: ClassValue }>(), {
  variant: 'default',
  size: 'default',
})

const rootClass = computed(() => {
  return cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-focus aria-invalid:ring-invalid",
    {
      default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
      destructive:
        'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline:
        'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
      secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
      link: 'text-primary underline-offset-4 hover:underline',
    }[props.variant],
    {
      sm: props.square ? 'size-8' : 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
      default: props.square ? 'size-9' : 'h-9 px-4 py-2 has-[>svg]:px-3',
      lg: props.square ? 'size-10' : 'h-10 px-6 has-[>svg]:px-4',
    }[props.size],
    props.pill && 'rounded-full',
    props.class
  )
})
</script>
<template>
  <button type="button" :class="rootClass" :disabled="disabled" @click="emit('click', $event)">
    <LoaderCircleIcon v-if="loading" class="animate-spin" />
    <slot />
  </button>
</template>
