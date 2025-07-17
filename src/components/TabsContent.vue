<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'

export type TabsContentProps = {
  value: string
  forceMount?: boolean
}
const props = withDefaults(defineProps<TabsContentProps & { class?: string | string[] }>(), {
  class: '',
})
</script>
<template>
  <TabsContent v-bind="props">
    <slot />
  </TabsContent>
</template>
