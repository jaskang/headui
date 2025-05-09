<script setup lang="ts">
import { computed, inject, watch } from 'vue'
import type { InputValue } from '@/utils/theme'
import { CheckboxGroupInjectKey } from './types'

defineOptions({ name: 'HCheckbox' })

const emit = defineEmits<{ change: [value: boolean] }>()
const { value, disabled } = defineProps<{
  value: InputValue
  disabled?: boolean
}>()
const group = inject(CheckboxGroupInjectKey, null)

const model = defineModel<boolean>('checked')

const checked = computed(() => (group ? group.value.value.includes(value) : model.value))

const clickHandler = () => {
  if (disabled) return
  if (group) {
    group.update(value, !checked.value)
  } else {
    model.value = !model.value
    emit('change', model.value)
  }
}
</script>
<template>
  <span
    :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
    @click="clickHandler"
  >
    <button
      type="button"
      role="checkbox"
      :aria-checked="checked"
      :data-state="checked ? 'checked' : 'unchecked'"
      :value="checked ? 'on' : 'off'"
      class="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span v-if="checked" data-state="checked" class="flex items-center justify-center text-current transition-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
    </button>
    <span class="relative ml-2 block text-sm font-medium">
      <slot />
    </span>
  </span>
</template>
