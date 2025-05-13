<script setup lang="ts">
import { Check as CheckIcon, MinusIcon } from 'lucide-vue-next'
import { CheckboxIndicator, CheckboxRoot, type CheckboxRootProps } from 'reka-ui'
import { computed, inject, watch } from 'vue'
import type { InputValue } from '@/utils/theme'

defineOptions({ name: 'HCheckbox' })

const props = defineProps<Omit<CheckboxRootProps, 'as' | 'asChild' | 'modelValue'>>()
const checked = defineModel<boolean | 'indeterminate'>('checked')
</script>
<template>
  <label :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']">
    <CheckboxRoot
      v-model="checked"
      v-bind="props"
      :class="[
        'peer border-input size-4 shrink-0 cursor-[inherit] rounded-[4px] border shadow-xs transition-shadow outline-none',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
        'dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary',
        // 'disabled:cursor-not-allowed disabled:opacity-50',
      ]"
    >
      <CheckboxIndicator class="flex items-center justify-center text-current transition-none">
        <MinusIcon v-if="checked === 'indeterminate'" class="h-full w-full" />
        <CheckIcon v-else class="h-full w-full" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span class="relative ml-2 block text-sm font-medium"><slot /></span>
  </label>
</template>
