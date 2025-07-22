# Popover

## default

```vue demo
<script setup>
import { Popover, Button } from 'headui'
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Popover v-model:open="open" trigger="click">
      <Button>Button</Button>
      <template #content> asdfasdfsa </template>
    </Popover>
    status: {{ open }}
  </div>
</template>
```

## model

```vue demo
<script setup>
import { Popover, Button } from 'headui'
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Popover v-model:open="open" modal trigger="click">
      <Button>Button</Button>
      <template #content> asdfasdfsa </template>
    </Popover>
    status: {{ open }}
  </div>
</template>
```
