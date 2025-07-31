<script setup lang="ts">
import type { ClassValue } from 'kotl'
import { SelectGroup, SelectLabel } from 'reka-ui'

defineSlots<{
  default: () => void
  label: () => void
}>()
const props = defineProps<{ class?: ClassValue; label?: string }>()
</script>

<template>
  <SelectGroup data-slot="select-group">
    <SelectLabel data-slot="select-label" class="text-muted-foreground px-2 py-1.5 text-xs">
      <slot name="label">
        {{ props.label }}
      </slot>
    </SelectLabel>
    <slot />
  </SelectGroup>
</template>
