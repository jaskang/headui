<script setup lang="ts">
defineOptions({ name: 'HDropdown' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; content?(_: {}): any }>()
const props = defineProps({
  menu: Array,
})
</script>
<template>
  <Popper trigger="click" placement="bottom" ref="popperRef">
    <slot />
    <template #content>
      <div class="z-popover ring-opacity-50 rounded-md bg-white shadow-lg ring-1 ring-gray-200">
        <slot name="content">
          <div class="px-2"></div>
        </slot>
      </div>
    </template>
  </Popper>
</template>
