<script setup lang="ts">
import { type PropType, provide, toRef, watch } from 'vue'
import { type InputValue } from '@/utils/theme'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'HRadioGroup' })
const emit = defineEmits<{ change: [InputValue] }>()
const props = defineProps({
  name: String,
  disabled: Boolean,
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
})
const model = defineModel<InputValue>('value')

watch(model, v => {
  emit('change', v!)
})

provide(RadioGroupInjectKey, {
  size: toRef(props, 'size'),
  model: model,
  select: (val: InputValue) => {
    model.value = val
  },
})
</script>
<template>
  <div>
    <slot />
  </div>
</template>
