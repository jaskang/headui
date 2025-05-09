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
const slots = defineSlots<{ toolbar?(props: { content: string }): any }>()
const props = defineProps({
  value: String,

  status: { type: String as PropType<'normal' | 'success' | 'warning' | 'danger'>, default: 'normal' },
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
const model = defineModel<string>('value', {
  set: v => emit('change', v),
})

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  emit('input', e)
}
</script>
<template>
  <textarea
    class="scrollbar placeholder:text-mute-foreground bg-input-background relative flex w-full appearance-none overflow-y-scroll rounded-md border py-1.5 pr-0 pl-3 text-sm leading-[1.375rem] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      noBorder ? 'border-transparent dark:border-transparent' : 'focus:ring-1',
      !noBorder &&
        {
          normal: 'focus:border-primary focus:ring-primary-500 border-gray-200',
          success: 'border-success-500 focus:border-success-500 focus:ring-success-500',
          warning: 'border-warning-500 focus:border-warning-500 focus:ring-warning-500',
          danger: 'border-danger-500 focus:border-danger-500 focus:ring-danger-500',
        }[props.status],
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
