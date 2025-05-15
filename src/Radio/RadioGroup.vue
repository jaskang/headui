<script setup lang="ts">
import { type AcceptableValue, RadioGroupRoot, type RadioGroupRootProps } from 'reka-ui'
import { watch } from 'vue'

defineOptions({ name: 'HRadioGroup' })
const emit = defineEmits<{ change: [AcceptableValue] }>()
const props = defineProps<Omit<RadioGroupRootProps, 'modelValue' | 'as' | 'asChild'>>()
const value = defineModel<AcceptableValue>('value')

watch(value, v => {
  emit('change', v!)
})
</script>
<template>
  <RadioGroupRoot v-model="value" v-bind="props">
    <slot />
  </RadioGroupRoot>
</template>
