<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { IAnchorItem } from './types'

defineOptions({ name: 'HAnchor' })
const emit = defineEmits<{ change: [index: number[]] }>()
const props = defineProps({
  current: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
  items: {
    type: Array as PropType<IAnchorItem[]>,
    default: () => [],
  },
  parent: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
})

const selectHandler = (item: IAnchorItem, index: number) => {
  emit('change', [...props.parent, index])
}

const itemHref = (item: IAnchorItem) => {
  if (item.link) {
    return item.link
  }
  if (item.id) {
    return `#${item.id}`
  }
  return '#'
}
const paddingLeft = (deep: number) => {
  return ['pl-4', 'pl-8', 'pl-12', 'pl-16'][deep] || 'pl-10'
}
const isActive = (index: number) => {
  if (props.current && props.current.length - props.parent.length === 1) {
    return props.current[props.parent.length] === index
  }
  return false
}
</script>
<template>
  <ul class="border-border flex flex-col gap-2 border-l">
    <li
      class="-ml-px flex flex-col items-start gap-2"
      v-for="(item, index) in items"
      :key="[...parent, index].join('-')"
    >
      <a
        :class="[
          'text-foreground inline-block border-l border-transparent text-sm/6',
          'hover:text-primary hover:border-primary',
          'aria-selected:text-primary aria-selected:border-primary aria-selected:font-semibold',
          paddingLeft(parent.length),
        ]"
        :aria-selected="isActive(index)"
        type="button"
        :href="itemHref(item)"
        @click="selectHandler(item, index)"
      >
        {{ item.title }}
      </a>
      <Anchor
        v-if="item.children && item.children.length > 0"
        :items="item.children"
        :current="current"
        :parent="[...parent, index]"
      />
    </li>
  </ul>
</template>
