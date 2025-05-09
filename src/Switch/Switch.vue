<script setup lang="ts">
defineOptions({ name: 'HSwitch' })

const emit = defineEmits<{ change: [boolean] }>()

const slots = defineSlots<{ default?(_: {}): any; open?(_: {}): any; close?(_: {}): any }>()

const props = defineProps({
  name: String,
  disabled: Boolean,
})
const model = defineModel<boolean>('checked')

const clickHandler = () => {
  model.value = !model.value
  emit('change', model.value)
}
</script>
<template>
  <button
    class="peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    role="switch"
    type="button"
    aria-label="Airplane Mode"
    aria-required="false"
    :aria-checked="model"
    :data-state="model ? 'checked' : 'unchecked'"
    :value="model ? 'on' : 'off'"
    @click="clickHandler"
  >
    <span
      :data-state="model ? 'checked' : 'unchecked'"
      class="bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
    >
    </span>
  </button>
</template>
