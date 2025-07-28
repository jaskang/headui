# Avatar

## 基础用法

```vue demo
<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next'
import { Badge } from 'headui'
</script>
<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge>Badge</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge> <CheckIcon />icon </Badge>
  </div>
</template>
```

## pill

```vue demo
<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next'
import { Badge } from 'headui'
</script>
<template>
  <div class="flex w-full flex-wrap gap-2">
    <Badge pill>Badge</Badge>
    <Badge variant="secondary" pill>Secondary</Badge>
    <Badge variant="destructive" pill>Destructive</Badge>
    <Badge variant="outline" pill>Outline</Badge>
    <Badge pill> <CheckIcon />icon </Badge>
  </div>
</template>
```

<!-- @doc: ../../src/components/Badge.vue -->
