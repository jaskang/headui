<script setup lang="ts">
import { computed, inject } from 'vue'
import { useModelValue } from '@/use/useModelValue'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'Radio' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
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
  <span
    :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
    @click="clickHandler"
  >
    <button
      type="button"
      role="radio"
      :aria-checked="checked"
      :data-state="checked ? 'checked' : 'unchecked'"
      :value="checked ? 'on' : 'off'"
      class="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-full border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span v-if="checked" data-state="checked" class="flex items-center justify-center text-current transition-none">
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="3" />
        </svg>
      </span>
    </button>
    <span class="relative ml-2 block text-sm font-medium">
      <slot />
    </span>
  </span>
</template>
