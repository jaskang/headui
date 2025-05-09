<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'HSpace' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <div class="flex">
    <slot />
  </div>
</template>
<style lang="scss"></style>
