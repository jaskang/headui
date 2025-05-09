<script setup lang="ts">
import { computed, inject, type PropType } from 'vue'
import type { InputValue } from '@/utils/theme'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'HRadioCard' })

const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const { value, disabled } = defineProps<{ value: InputValue; disabled: boolean }>()
const model = defineModel<boolean>('checked')
const group = inject(RadioGroupInjectKey, null)
const checked = computed(() => (group ? group.model.value === value : model.value))
const clickHandler = () => {
  if (disabled) return
  if (group) {
    group.select(value)
  } else {
    model.value = !model.value
    emit('change', !!model.value)
  }
}
</script>
<template>
  <div
    :class="[
      'border-input relative flex cursor-pointer items-center justify-center rounded-md border text-center shadow-xs transition-all outline-none',
      'has-data-[state=checked]:border-primary/80 has-data-[state=checked]:bg-primary/10',
      'has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50',
      'has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]',
    ]"
    :data-state="checked ? 'checked' : 'unchecked'"
    @click="clickHandler"
  >
    <button
      type="button"
      role="radio"
      :aria-checked="checked"
      :data-state="checked ? 'checked' : 'unchecked'"
      :value="value"
      class="sr-only outline-none"
      :disabled="disabled"
      :tabindex="checked ? '0' : '-1'"
      data-radix-collection-item=""
    ></button>
    <slot :checked="checked" :onClick="clickHandler" />
  </div>
</template>
