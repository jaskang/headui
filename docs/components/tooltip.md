# HTooltip

## default

```vue demo
<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <HTooltip v-model:open="open" content="content">
      <HButton>HButton</HButton>
    </HTooltip>
    status: {{ open }}
  </div>
</template>
```

## nested

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HTooltip trigger="click">
      <HButton>HButton</HButton>
      <template #content> content </template>
    </HTooltip>
  </div>
</template>
```
