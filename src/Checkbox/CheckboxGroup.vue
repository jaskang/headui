<script setup lang="ts">
import { type PropType, provide } from 'vue'
import { useModelValue } from '@/use/useModelValue'
import { CheckboxGroupInjectKey } from './types'
import { type InputValue } from '@/utils/theme'

defineOptions({ name: 'CheckboxGroup' })
const model = defineModel<InputValue[]>('value', { default: undefined })
const emit = defineEmits<{ change: [InputValue[]] }>()
const props = defineProps({ name: String, disabled: Boolean })

const value = useModelValue(model, {
  emits: ['change'],
})
provide(CheckboxGroupInjectKey, {
  value: value,
  update: (val: InputValue, checked: boolean) => {
    if (checked) {
      if (value.value.indexOf(val) === -1) {
        value.value = [...value.value, val]
      }
    } else {
      const index = value.value.indexOf(val)
      if (index !== -1) {
        const r = [...value.value]
        r.splice(index, 1)
        value.value = r
      }
    }
  },
})
</script>
<template>
  <div>
    <slot />
  </div>
</template>
