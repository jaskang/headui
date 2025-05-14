# HPopover

## default

```vue demo
<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <HPopover v-model:open="open" trigger="click">
      <HButton>Button</HButton>
      <template #content> asdfasdfsa </template>
    </HPopover>
    status: {{ open }}
  </div>
</template>
```

## model

```vue demo
<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <HPopover v-model:open="open" modal trigger="click">
      <HButton>Button</HButton>
      <template #content> asdfasdfsa </template>
    </HPopover>
    status: {{ open }}
  </div>
</template>
```
