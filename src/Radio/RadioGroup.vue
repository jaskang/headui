<script setup lang="ts">
import { type AcceptableValue, RadioGroupRoot, type RadioGroupRootProps } from 'reka-ui'
import { type PropType, provide, toRef, watch } from 'vue'
import { type InputValue } from '@/utils/theme'

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
