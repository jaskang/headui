<script setup lang="ts">
import { type PropType } from 'vue'
defineOptions({ name: 'Textarea' })

const emit = defineEmits<{
  change: [string]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
}>()

const {
  placeholder,
  readonly,
  disabled,
  resize = 'none',
  rows = 3,
  autocomplete = 'off',
} = defineProps<{
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  rows: number
  resize: 'none' | 'both' | 'x' | 'y'
  autocomplete: 'on' | 'off'
}>()
const model = defineModel<string>('value')
</script>
<template>
  <!-- 
  border-input flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none 
  placeholder:text-muted-foreground 
  focus-visible:border-ring focus-visible:ring-ring/50   focus-visible:ring-[3px] 
  aria-invalid:ring-destructive/20 aria-invalid:border-destructive 
  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm
  dark:bg-input/30  dark:aria-invalid:ring-destructive/40 
  -->
  <textarea
    :class="[
      'border-input flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none',
      'placeholder:text-muted-foreground',
      'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
      {
        none: 'resize-none',
        both: 'resize',
        x: 'resize-x',
        y: 'resize-y',
      }[resize],
    ]"
    type="text"
    v-model="model"
    :rows="rows"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    @input="emit('input', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
  />
</template>
