<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'

defineOptions({ name: 'Switch' })

const model = defineModel<boolean>('value', { default: undefined })
const emit = defineEmits<{ 'update:value': [boolean]; change: [boolean] }>()

const slots = defineSlots<{ default?(_: {}): any; open?(_: {}): any; close?(_: {}): any }>()

const props = defineProps({
  name: String,
  disabled: Boolean,
})

const value = useModelValue(model, {
  emits: ['change'],
})

const clickHandler = () => {
  value.value = !value.value
}
</script>
<template>
  <button
    type="button"
    class="data-[checked=true]:bg-primary-500 focus-visible:ring-primary-500 relative inline-flex h-6 w-11 rounded-full border-2 border-transparent bg-gray-100 ring-1 ring-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
    :data-checked="!!value"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <span
      :data-checked="!!value"
      class="bg-background pointer-events-none relative inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out data-[checked=true]:translate-x-5 data-[state=unchecked]:translate-x-0"
    ></span>
  </button>
</template>
