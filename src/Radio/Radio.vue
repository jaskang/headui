<script setup lang="ts">
import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps, type RadioGroupItemSelectEvent } from 'reka-ui'

defineOptions({ name: 'HRadio' })

const emit = defineEmits<{ select: [RadioGroupItemSelectEvent] }>()
const props = defineProps<Omit<RadioGroupItemProps, 'as' | 'asChild'>>()
</script>
<template>
  <label :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']">
    <RadioGroupItem
      v-bind="props"
      @select="emit('select', $event)"
      :class="[
        'peer border-input size-4 shrink-0 cursor-[inherit] rounded-full border shadow-xs transition-shadow outline-none',
        'data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        // 'disabled:cursor-not-allowed disabled:opacity-50',
        'dark:bg-input/30 dark:data-[state=checked]:bg-primary dark:aria-invalid:ring-destructive/40',
      ]"
    >
      <RadioGroupIndicator class="flex items-center justify-center text-current transition-none">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5"></circle>
        </svg>
      </RadioGroupIndicator>
    </RadioGroupItem>
    <span class="relative ml-2 block text-sm font-medium">
      <slot />
    </span>
  </label>
</template>
