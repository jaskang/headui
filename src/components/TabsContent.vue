<script setup lang="ts">
import type { ClassValue } from 'kotl'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

export type TabsContentProps = {
  value: string
  forceMount?: boolean
}

defineOptions({ name: 'TabsContent' })
const props = withDefaults(defineProps<TabsContentProps & { class?: ClassValue }>(), {
  class: '',
})
</script>
<template>
  <TabsContent v-bind="props">
    <slot />
  </TabsContent>
</template>
