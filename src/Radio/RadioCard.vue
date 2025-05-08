<script setup lang="ts">
import { computed, inject } from 'vue'
import { useModelValue } from '@/use/useModelValue'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'RadioItem' })

const emit = defineEmits<{
  (e: 'update:checked', value: boolean): void
  (e: 'change', value: boolean): void
}>()
const props = defineProps({
  value: { type: null, required: true },
  name: String,
  disabled: Boolean,
  checked: { type: Boolean, default: undefined },
})

const group = inject(RadioGroupInjectKey, null)

const [modelChecked, setModelChecked] = useModelValue(props, {
  defaultValue: group ? group.value.value === props.value : false,
  valuePropName: 'checked',
  onChange: (val: boolean) => {
    emit('change', val)
    group?.select(props.value)
  },
})
const checked = computed(() => (group ? group.value.value === props.value : modelChecked.value))

const clickHandler = () => {
  setModelChecked(true)
}
</script>
<template>
  <slot :checked="checked" :onClick="clickHandler" />
</template>
