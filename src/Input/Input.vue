<script setup lang="ts">
import { type InputHTMLAttributes, type PropType, ref, watch } from 'vue'
import type { InputValue } from '../utils/theme'

defineOptions({ name: 'HInput' })
const slots = defineSlots<{ prefix?: (_: {}) => any; suffix?: (_: {}) => any }>()
const emit = defineEmits<{
  change: [InputValue]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
}>()
const props = defineProps<{
  name?: string
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  required?: boolean
  autofocus?: boolean
  maxlength?: number
  pattern?: string

  prefix?: string
  suffix?: string
  allowClear?: boolean
}>()

const value = defineModel<string>('value')

watch(value, v => {
  emit('change', v!)
})
</script>
<template>
  <div
    class=""
    :class="[
      'flex h-9 w-full min-w-0 rounded-md text-sm shadow-xs',
      'dark:bg-input/30 border-input bg-background border transition-[color,box-shadow]',
      'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
      'aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40',
    ]"
    :data-disabled="disabled"
  >
    <span v-if="prefix || slots.prefix" class="flex h-full items-center">
      <slot name="prefix">
        <span class="pl-3"> {{ prefix }} </span>
      </slot>
    </span>
    <input
      ref="inputRef"
      :class="[
        'block w-full flex-1 cursor-[inherit] border-0 bg-transparent px-3 py-1.5 text-sm leading-[1.375rem] outline-none',
        'selection:bg-primary selection:text-primary-foreground',
        'placeholder:text-muted-foreground',
        'focus:outline-none',
        prefix || slots.prefix ? 'pl-1' : '',
        suffix || slots.suffix ? 'pr-1' : '',
      ]"
      type="text"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :pattern="pattern"
      v-model="value"
      autocomplete="off"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      @input="emit('input', $event)"
    />
    <span v-if="suffix || slots.suffix" class="z-input_suffix flex h-full items-center">
      <slot name="suffix">
        <span class="pr-3">
          {{ suffix }}
        </span>
      </slot>
    </span>
  </div>
</template>
