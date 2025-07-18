# Tooltip

## default

```vue demo
<script setup>
import { Tooltip, Button } from 'sinvue'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Tooltip content="content">
      <Button>Button</Button>
    </Tooltip>
  </div>
</template>
```

## nested

```vue demo
<script setup>
import { Tooltip, Button } from 'sinvue'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Tooltip trigger="click">
      <Button>Button</Button>
      <template #content> content </template>
    </Tooltip>
  </div>
</template>
```
