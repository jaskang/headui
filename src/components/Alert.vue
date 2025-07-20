<script setup lang="ts">
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'

type AlertProps = {
  variant?: 'default' | 'destructive'
  title?: string
}

defineOptions({ name: 'Alert' })
const slots = defineSlots<{
  default?(props: {}): any
  icon?(props: {}): any
  title?(props: {}): any
}>()
const props = withDefaults(defineProps<AlertProps>(), {
  variant: 'default',
})
</script>
<template>
  <div
    data-slot="alert"
    role="alert"
    :class="
      cn([
        'relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
        {
          default: 'bg-card text-card-foreground',
          destructive:
            'text-destructive bg-card *:data-[slot=alert-description]:text-destructive/90 [&>svg]:text-current',
        }[props.variant],
      ])
    "
  >
    <slot name="icon" />
    <div data-slot="alert-title" class="col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div
      data-slot="alert-description"
      class="text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed"
    >
      <slot />
    </div>
  </div>
</template>
