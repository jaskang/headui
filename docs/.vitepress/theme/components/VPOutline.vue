<script setup lang="ts">
import { Anchor } from 'tailv'
import { useAnchor } from '../composables/anchor'
import { useData } from 'vitepress'

defineOptions({ name: 'VPOutline' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const { page } = useData()
const { items, current } = useAnchor()
</script>
<template>
  <div>
    <h5 class="text-default-900 mb-4 text-sm leading-6 font-semibold">On This Page</h5>
    <Anchor :current="current" :items="items" :offset="135"></Anchor>
  </div>
</template>
