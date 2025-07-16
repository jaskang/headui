<script setup lang="ts">
import { CircleIcon } from 'lucide-vue-next'
import {
  type AcceptableValue,
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
  type RadioGroupItemSelectEvent,
} from 'reka-ui'

export type RadioProps = {
  value?: AcceptableValue
  disabled?: boolean
}

const emit = defineEmits<{ select: [RadioGroupItemSelectEvent] }>()
const props = defineProps<RadioProps>()
const checked = defineModel<boolean>('checked')
</script>
<template>
  <label
    class="relative inline-flex cursor-pointer items-center has-disabled:cursor-not-allowed has-disabled:opacity-50"
  >
    <RadioGroupItem
      data-slot="radio-group-item"
      class="border-input text-primary focus-visible:ring-focus aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50"
      v-bind="props"
      v-model="checked"
    >
      <RadioGroupIndicator data-slot="radio-group-indicator" class="relative flex items-center justify-center">
        <CircleIcon class="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        <!-- <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5"></circle>
        </svg> -->
      </RadioGroupIndicator>
    </RadioGroupItem>
    <span class="relative ml-2 block text-sm font-medium">
      <slot />
    </span>
  </label>
</template>
