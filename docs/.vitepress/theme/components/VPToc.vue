<script setup lang="ts">
import { Anchor } from 'sinvue'
import { useData } from 'vitepress'
import { useAnchor } from '../composables/anchor'

defineOptions({ name: 'Toc' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const { page } = useData()
const { items, current } = useAnchor()
</script>
<template>
  <Anchor :current="current" :items="items" :offset="135"></Anchor>
</template>
