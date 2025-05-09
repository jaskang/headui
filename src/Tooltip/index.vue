<script setup lang="ts">
import { type PropType } from 'vue'
import { Popper, type PopperPlacement } from '../Base'

defineOptions({ name: 'HTooltip' })
defineProps({
  content: String,
  placement: { type: String as PropType<PopperPlacement>, default: 'top' },
})
</script>
<template>
  <Popper trigger="hover" :placement="placement">
    <slot />
    <template #content>
      <div class="z-tooltip ring-opacity-50 rounded bg-white shadow-md ring-1 ring-gray-200">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
