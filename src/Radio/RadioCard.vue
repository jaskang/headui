<script setup lang="ts">
import { computed, inject, type PropType } from 'vue'
import type { InputValue } from '@/utils/theme'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'HRadioItem' })

const emit = defineEmits<{
  (e: 'update:checked', value: boolean): void
  (e: 'change', value: boolean): void
}>()
const { value, name, disabled } = defineProps({
  value: { type: [String, Number] as PropType<InputValue>, required: true },
  name: String,
  disabled: Boolean,
})

const model = defineModel<boolean>('checked', {
  default: false,
  set(v) {
    emit('change', v)
    group?.select(value)
  },
})
const group = inject(RadioGroupInjectKey, null)
if (group) {
  model.value = group.value.value === value
}

const checked = computed(() => (group ? group.value.value === value : model.value))

const clickHandler = () => {
  if (disabled) return
  model.value = true
}
</script>
<template>
  <slot :checked="checked" :onClick="clickHandler" />
</template>
