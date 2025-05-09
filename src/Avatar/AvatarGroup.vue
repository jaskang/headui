<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from './Avatar.vue'
defineOptions({ name: 'HAvatarGroup' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <div></div>
</template>
