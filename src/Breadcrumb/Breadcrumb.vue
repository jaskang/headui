<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'

export type BreadcrumbItem = {
  title: string
  path: string
}

defineOptions({ name: 'HBreadcrumb' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  items: Array as PropType<BreadcrumbItem[]>,
})
</script>
<template>
  <nav>
    <ol class="flex list-none flex-wrap items-center gap-1.5 text-sm break-words">
      <li v-for="item in items">
        {{ item.title }}
      </li>
    </ol>
  </nav>
</template>
