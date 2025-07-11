<script setup lang="ts" generic="">
import { type AcceptableValue, CheckboxGroupRoot, type CheckboxGroupRootProps } from 'reka-ui'
import { watch } from 'vue'

export type CheckboxGroupProps = {
  defaultValue?: AcceptableValue[]
  rovingFocus?: boolean
  disabled?: boolean
}

const emit = defineEmits<{ change: [AcceptableValue[]] }>()
const props = defineProps<CheckboxGroupProps>()
const value = defineModel<AcceptableValue[]>('value')

watch(value, v => {
  emit('change', v!)
})
</script>
<template>
  <CheckboxGroupRoot class="group" v-model="value" v-bind="props">
    <slot />
  </CheckboxGroupRoot>
</template>
