<script setup lang="ts">
import { type AcceptableValue, CheckboxGroupRoot, type CheckboxGroupRootProps } from 'reka-ui'
import { watch } from 'vue'

defineOptions({ name: 'HCheckboxGroup' })
const emit = defineEmits<{ change: [AcceptableValue[]] }>()
const props = defineProps<Omit<CheckboxGroupRootProps, 'modelValue' | 'as' | 'asChild'>>()
const value = defineModel<AcceptableValue[]>('value', { default: [] })

watch(value, v => {
  emit('change', v)
})
</script>
<template>
  <CheckboxGroupRoot v-model="value" v-bind="props">
    <slot />
  </CheckboxGroupRoot>
</template>
