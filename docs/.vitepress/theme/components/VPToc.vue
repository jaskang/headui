<script setup lang="ts">
import { useData } from 'vitepress'
import { useAnchor } from '../composables/anchor'

defineOptions({ name: 'Toc' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const { page } = useData()
const { headers, current } = useAnchor()
</script>
<template>
  <div class="flex flex-col gap-2 p-4 pt-0 text-sm">
    <p class="text-muted-foreground bg-background sticky top-0 h-6 text-xs">On This Page</p>
    <a
      v-for="item in headers"
      :key="item.link"
      :href="item.link"
      class="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground text-[0.8rem] no-underline transition-colors data-[depth=3]:pl-4 data-[depth=4]:pl-6"
      :data-active="item.path === current"
      :data-depth="item.level"
    >
      {{ item.title }}
    </a>
  </div>
</template>
