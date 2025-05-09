<script setup lang="ts">
import { type PropType, ref, watch } from 'vue'
import type { InputValue } from '@/utils/theme'

defineOptions({ name: 'HInput' })
const emit = defineEmits<{
  change: [InputValue]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
}>()
const model = defineModel<string | number>('value')
const props = defineProps({
  status: { type: String as PropType<'normal' | 'success' | 'warning' | 'danger'>, default: 'normal' },
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
  allowClear: Boolean,
})
const slots = defineSlots<{ prefix?: (_: {}) => any; suffix?: (_: {}) => any }>()

watch(model, v => {
  emit('change', v!)
})

const inputRef = ref<HTMLInputElement>()

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
})
</script>
<template>
  <!-- "
   file:text-foreground 
   placeholder:text-muted-foreground 
   selection:bg-primary selection:text-primary-foreground 
   dark:bg-input/30 
   border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent 
   px-3 py-1 text-base shadow-xs transition-[color,box-shadow] 
   outline-none 
   file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium 
   disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 
   md:text-sm 
   focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] 
   aria-invalid:ring-destructive/20 
   dark:aria-invalid:ring-destructive/40 
   aria-invalid:border-destructive -->

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
      class="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground block w-full flex-1 cursor-[inherit] border-0 bg-transparent px-3 py-1.5 text-sm leading-[1.375rem] outline-none focus:outline-none"
      :class="{
        'pl-1': prefix || slots.prefix,
        'pr-1': suffix || slots.suffix,
      }"
      style="box-shadow: none"
      type="text"
      v-model="model"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
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
