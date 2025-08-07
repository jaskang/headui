<script setup lang="ts">
import type { ClassValue } from 'kotl'
import { computed, type PropType } from 'vue'
import { cn } from '@/lib/utils'

export type BadgeProps = {
  /**
   * 变体类型
   */
  variant?: 'default' | 'secondary' | 'outline' | 'destructive'
  /**
   * 是否为圆形徽章
   */
  pill?: boolean
}

const props = withDefaults(defineProps<BadgeProps & { class?: ClassValue }>(), {
  variant: 'default',
})
</script>
<template>
  <span
    data-slot="badge"
    :class="
      cn(
        'focus-visible:ring-focus aria-invalid:ring-invalid inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] [&>svg]:pointer-events-none [&>svg]:size-3',
        {
          default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent',
          secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent',
          destructive:
            'bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-transparent text-white',
          outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        }[props.variant],
        props.pill ? 'rounded-full' : 'rounded-md',
        props.class
      )
    "
  >
    <slot />
  </span>
</template>
