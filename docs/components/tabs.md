# Tab

## 基础用法

```vue demo
<script setup>
import { ref } from 'vue'
import { Tabs } from 'headui'

const items = [
  { value: '1', text: 'Tab 1' },
  { value: '2', text: 'Tab 2' },
  { value: '3', text: 'Tab 3' },
]

const current = ref('1')
</script>
<template>
  <Tabs class="border-b px-2" :items="items" v-model:value="current"></Tabs>
  current: Tab {{ current }}
</template>
```

## 内容插槽

```vue demo
<script setup>
import { Tabs, TabsContent } from 'headui'

const items = [
  { value: '1', text: 'Tab 1' },
  { value: '2', text: 'Tab 2' },
  { value: '3', text: 'Tab 3' },
]
</script>
<template>
  <Tabs :items="items" class="rounded">
    <TabsContent v-for="item in items" :key="item.value" :value="item.value">
      {{ item.text }}
    </TabsContent>
  </Tabs>
</template>
```

<!-- @doc: ../../src/components/Tabs.vue -->
