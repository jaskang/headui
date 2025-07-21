<script setup lang="ts">
import { useVModel } from '@vueuse/core'

import { type PropType } from 'vue'

const emit = defineEmits<{
  'update:value': [value: string]
  change: [value: string]
  input: [event: Event]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
  keypress: [event: KeyboardEvent]
}>()

export type TextareaProps = {
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  rows?: number
  resize?: 'none' | 'all' | 'vertical' | 'horizontal'
  defaultValue?: string
  value?: string
}

const props = withDefaults(defineProps<TextareaProps>(), {
  rows: 3,
  resize: 'vertical',
})
const value = useVModel(props, 'value', emit, {
  defaultValue: props.defaultValue,
  passive: (props.value === undefined) as false,
})
</script>
<template>
  <textarea
    :class="[
      'border-input placeholder:text-muted-foreground focus-visible:ring-focus aria-invalid:ring-invalid dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      {
        none: 'resize-none',
        all: 'resize',
        vertical: 'resize-y',
        horizontal: 'resize-x',
      }[resize],
    ]"
    type="text"
    v-model="value"
    :rows="rows"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="emit('input', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
    @keydown="emit('keydown', $event)"
    @keyup="emit('keyup', $event)"
    @keypress="emit('keypress', $event)"
  />
</template>
