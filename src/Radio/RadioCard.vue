<script setup lang="ts">
import { RadioGroupItem, type RadioGroupItemProps, type RadioGroupItemSelectEvent } from 'reka-ui'

defineOptions({ name: 'HRadioCard' })

const emit = defineEmits<{ select: [RadioGroupItemSelectEvent] }>()
const props = defineProps<Omit<RadioGroupItemProps, 'as' | 'asChild'>>()
</script>
<template>
  <RadioGroupItem
    v-bind="props"
    @select="emit('select', $event)"
    :class="[
      'border-input relative flex cursor-pointer items-center justify-center rounded-md border text-center shadow-xs transition-all outline-none',
      'data-[state=checked]:border-primary/80 data-[state=checked]:bg-primary/10',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    ]"
  >
    <template #default="{ checked }">
      <slot :checked="checked" />
    </template>
  </RadioGroupItem>
</template>
