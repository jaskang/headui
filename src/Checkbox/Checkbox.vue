<script setup lang="ts">
import { computed, inject } from 'vue'
import { useModelValue } from '@/use/useModelValue'
import { CheckboxGroupInjectKey } from './types'
import type { InputValue } from '@/utils/theme'

defineOptions({ name: 'Checkbox' })

const emit = defineEmits<{ change: [value: boolean] }>()
const props = defineProps<{
  value: InputValue
  name?: string
  disabled?: boolean
}>()
const group = inject(CheckboxGroupInjectKey, null)

const innerChecked = defineModel<boolean>('checked', {
  default: false,
  set(v) {
    emit('change', v)
    group?.update(props.value, v)
  },
})

const checked = computed(() => (group ? group.value.value.includes(props.value) : innerChecked.value))

const clickHandler = () => {
  if (props.disabled) return
  innerChecked.value = !checked.value
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
