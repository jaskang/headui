<script setup lang="ts">
import { type PropType, provide, watch } from 'vue'
import type { InputValue } from '@/utils/theme'
import { CheckboxGroupInjectKey } from './types'

defineOptions({ name: 'HCheckboxGroup' })
const emit = defineEmits<{ change: [InputValue[]] }>()
const props = defineProps({ name: String, disabled: Boolean })
const model = defineModel<InputValue[]>('value', { default: [] })

watch(model, v => {
  emit('change', v)
})

provide(CheckboxGroupInjectKey, {
  value: model,
  update: (val: InputValue, checked: boolean) => {
    if (checked) {
      if (model.value.indexOf(val) === -1) {
        model.value = [...model.value, val]
      }
    } else {
      const index = model.value.indexOf(val)
      if (index !== -1) {
        const r = [...model.value]
        r.splice(index, 1)
        model.value = r
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
