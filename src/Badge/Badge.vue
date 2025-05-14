<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { type PropType } from 'vue'

defineOptions({ name: 'HBadge' })
const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      variant: 'default' | 'secondary' | 'outline' | 'destructive'
      pill: boolean
    }
  >(),
  {
    as: 'span',
    variant: 'default',
    pill: false,
  }
)
</script>
<template>
  <Primitive
    v-bind="props"
    data-slot="badge"
    :class="[
      'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow]',
      'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      '[&>svg]:pointer-events-none [&>svg]:size-3',
      'dark:aria-invalid:ring-destructive/40',
      {
        default: 'bg-primary text-primary-foreground [a&]:hover:bg-primary/90 border-transparent',
        secondary: 'bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 border-transparent',
        destructive:
          'bg-destructive [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 border-transparent text-white',
        outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      }[variant],
      pill ? 'rounded-full' : 'rounded-md',
    ]"
  >
    <slot />
  </Primitive>
</template>
