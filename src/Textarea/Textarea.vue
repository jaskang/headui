<script setup lang="ts">
import { type PropType } from 'vue'
defineOptions({ name: 'HTextarea' })
const emit = defineEmits<{
  'update:value': [string]
  change: [string]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
  keydown: [KeyboardEvent]
  keyup: [KeyboardEvent]
  keypress: [KeyboardEvent]
  paste: [ClipboardEvent]
  contextmenu: [MouseEvent]
}>()

const props = defineProps({
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
  noBorder: Boolean,
  rows: {
    type: Number,
    default: 3,
  },
  resize: {
    type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
    default: 'none',
  },
  autocomplete: {
    type: String as PropType<'on' | 'off'>,
    default: 'off',
  },
})
const model = defineModel<string>('value')

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  emit('input', e)
}
</script>
<template>
  <!-- 
  border-input 
  placeholder:text-muted-foreground 
  focus-visible:border-ring focus-visible:ring-ring/50    focus-visible:ring-[3px] 
  aria-invalid:ring-destructive/20 
  dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive 
  dark:bg-input/30 
  flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs 
  transition-[color,box-shadow] outline-none 

  disabled:cursor-not-allowed disabled:opacity-50 
  md:text-sm 
  -->
  <textarea
    :class="[
      'flex field-sizing-content min-h-16 w-full appearance-none rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none',
      'placeholder:text-muted-foreground',
      'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
      noBorder ? 'border-transparent dark:border-transparent' : 'focus:ring-1',
    ]"
    :style="{
      resize: resize,
    }"
    type="text"
    :rows="rows"
    v-model="model"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    @input="onInput"
    @keypress="emit('keypress', $event)"
    @keydown="emit('keydown', $event)"
    @keyup="emit('keyup', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
    @contextmenu="emit('contextmenu', $event)"
  />
</template>
