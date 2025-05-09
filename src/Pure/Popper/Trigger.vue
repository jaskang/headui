<script setup lang="ts">
import { ref } from 'vue'
import { ForwardSlot } from '../ForwardSlot'
defineOptions({ name: 'HTrigger' })

const props = defineProps({})

const trigger = ref()
</script>
<template>
  <ForwardSlot ref="trigger">
    <slot />
  </ForwardSlot>
</template>
