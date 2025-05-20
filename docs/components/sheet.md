## Default

```vue demo
<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <HButton @click="open = !open">Open</HButton>
    <HSheet v-model:open="open" title="Sheet" description="Sheet description">
      <div>asdf</div>
    </HSheet>
  </div>
</template>
```
