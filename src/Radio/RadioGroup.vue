<script setup lang="ts">
import { provide, toRef, type PropType } from 'vue'
import { RadioGroupInjectKey } from './types'
import { useModelValue } from '@/use/useModelValue'
import { type InputValue } from '@/utils/theme'

defineOptions({ name: 'RadioGroup' })
const model = defineModel<InputValue>('value', { default: undefined })
const emit = defineEmits<{ change: [InputValue] }>()

const props = defineProps({
  name: String,
  disabled: Boolean,
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
})

const value = useModelValue(model, {
  emits: ['change'],
})

provide(RadioGroupInjectKey, {
  size: toRef(props, 'size'),
  value: value,
  select: (val: InputValue) => {
    value.value = val
  },
})
</script>
<template>
  <div>
    <slot />
  </div>
</template>
