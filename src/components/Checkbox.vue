<script setup lang="ts">
import { Check as CheckIcon, MinusIcon } from 'lucide-vue-next'
import { type AcceptableValue, CheckboxIndicator, CheckboxRoot, type CheckboxRootProps } from 'reka-ui'
import { watch } from 'vue'

defineOptions({ name: 'HCheckbox' })

export type checkboxProps = {
  defaultValue?: boolean | 'indeterminate'
  /** When `true`, prevents the user from interacting with the checkbox */
  disabled?: boolean
  /**
   * The value given as data when submitted with a `name`.
   *  @defaultValue "on"
   */
  value?: AcceptableValue
}

const emit = defineEmits<{ change: [boolean | 'indeterminate'] }>()
const props = defineProps<checkboxProps>()
const checked = defineModel<boolean | 'indeterminate'>('checked')

watch(checked, v => {
  emit('change', v)
})
</script>
<template>
  <label
    class="relative inline-flex cursor-pointer items-center has-disabled:cursor-not-allowed has-disabled:opacity-50"
  >
    <CheckboxRoot
      data-slot="checkbox"
      class="peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:ring-focus aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none"
      v-model="checked"
      v-bind="props"
    >
      <CheckboxIndicator
        data-slot="checkbox-indicator"
        class="flex items-center justify-center text-current transition-none"
      >
        <MinusIcon v-if="checked === 'indeterminate'" class="size-full" />
        <CheckIcon v-else class="size-full" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span class="relative ml-2 block text-sm font-medium"><slot /></span>
  </label>
</template>
