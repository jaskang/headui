<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { cn } from '@/lib/utils'

export type BadgeProps = {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
  pill?: boolean
  class?: string
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
})

const rootClass = computed(() => {
  return cn(
    'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:ring-focus aria-invalid:ring-invalid transition-[color,box-shadow] overflow-hidden',
    {
      default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
      secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
      destructive:
        'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
      outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
    }[props.variant],
    props.pill ? 'rounded-full' : 'rounded-md',
    props.class
  )
})
</script>
<template>
  <span data-slot="badge" :class="rootClass">
    <slot />
  </span>
</template>
