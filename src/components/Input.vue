<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
import { type InputHTMLAttributes, type PropType, ref, useTemplateRef, watch } from 'vue'
import { cn, type ThemeSize } from '@/lib/utils'
import type { InputValue } from '../utils/theme'
import Button from './Button.vue'

// export type InputTypeHTMLAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});
// export interface InputHTMLAttributes extends HTMLAttributes {
//     accept?: string;
//     alt?: string;
//     autocomplete?: string;
//     autofocus?: Booleanish;
//     capture?: boolean | 'user' | 'environment';
//     checked?: Booleanish | any[] | Set<any>;
//     crossorigin?: string;
//     disabled?: Booleanish;
//     enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
//     form?: string;
//     formaction?: string;
//     formenctype?: string;
//     formmethod?: string;
//     formnovalidate?: Booleanish;
//     formtarget?: string;
//     height?: Numberish;
//     indeterminate?: boolean;
//     list?: string;
//     max?: Numberish;
//     maxlength?: Numberish;
//     min?: Numberish;
//     minlength?: Numberish;
//     multiple?: Booleanish;
//     name?: string;
//     pattern?: string;
//     placeholder?: string;
//     readonly?: Booleanish;
//     required?: Booleanish;
//     size?: Numberish;
//     src?: string;
//     step?: Numberish;
//     type?: InputTypeHTMLAttribute;
//     value?: any;
//     width?: Numberish;
// }
export type InputProps = {
  // 原生属性
  name?: string
  disabled?: boolean
  placeholder?: string
  readonly?: boolean
  autofocus?: boolean
  // 自定义
  clearable?: boolean
  size?: ThemeSize
}

const emit = defineEmits<{
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  change: [val: string]
  input: [event: Event]
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
  keypress: [event: KeyboardEvent]

  clear: []
}>()
const slots = defineSlots<{ prefix?: (_: {}) => any; suffix?: (_: {}) => any }>()
const props = withDefaults(defineProps<InputProps>(), {
  size: 'default',
})

const value = defineModel<string>('value')

const inputRef = useTemplateRef<HTMLInputElement>('inputRef')

const onClear = () => {
  value.value = ''
  inputRef.value?.focus()
  emit('clear')
}
watch(value, v => {
  emit('change', v!)
})
</script>
<template>
  <div
    :class="
      cn([
        'group',
        'flex w-full min-w-0 rounded-md px-2 text-sm shadow-xs',
        'dark:bg-input/30 border-input bg-background border transition-[color,box-shadow]',
        'focus-within:ring-focus',
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50',
        'aria-invalid:ring-invalid',
        {
          sm: 'h-8',
          default: 'h-9 px-2',
          lg: 'h-10',
        }[props.size],
      ])
    "
    :data-disabled="disabled"
  >
    <span v-if="slots.prefix" class="z-input_prefix flex h-full items-center [&>svg]:size-4">
      <slot name="prefix" />
    </span>
    <div class="relative flex w-full flex-1 items-center">
      <input
        ref="inputRef"
        :class="[
          'block w-full cursor-[inherit] border-0 bg-transparent outline-none',
          'selection:bg-primary selection:text-primary-foreground',
          'placeholder:text-muted-foreground',
          'focus:outline-none',
          'px-1 py-1.5 text-sm leading-[1.375rem]',
        ]"
        type="text"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :autofocus="autofocus"
        autocomplete="off"
        v-model="value"
        @focus="emit('focus', $event)"
        @blur="emit('blur', $event)"
        @input="emit('input', $event)"
        @keydown="emit('keydown', $event)"
        @keyup="emit('keyup', $event)"
        @keypress="emit('keypress', $event)"
      />
      <div
        role="button"
        tabindex="-1"
        v-if="clearable && value"
        @click="onClear"
        class="text-muted-foreground hover:text-foreground bg-muted absolute top-1/2 right-0.5 hidden size-4 -translate-y-1/2 items-center justify-center rounded-full group-hover:flex"
      >
        <XIcon class="size-3" />
      </div>
    </div>
    <span v-if="slots.suffix" class="z-input_suffix flex h-full items-center [&>svg]:size-4">
      <slot name="suffix" />
    </span>
  </div>
</template>
