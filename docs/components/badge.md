# Avatar

## 基础用法

```vue demo
<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex w-full flex-wrap gap-2">
    <HBadge>Badge</HBadge>
    <HBadge variant="secondary">Secondary</HBadge>
    <HBadge variant="destructive">Destructive</HBadge>
    <HBadge variant="outline">Outline</HBadge>
    <HBadge> <CheckIcon />icon </HBadge>
    <HBadge pill>99</HBadge>
    <HBadge variant="secondary" pill>88</HBadge>
    <HBadge variant="destructive" pill>77</HBadge>
    <HBadge variant="outline" pill><CheckIcon /></HBadge>
  </div>
</template>
```

## 链接用法

```vue demo
<script setup lang="ts">
import { CheckIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex w-full flex-wrap gap-2">
    <HBadge as="a" href="#">Badge</HBadge>
    <HBadge variant="secondary" as="a" href="#">Secondary</HBadge>
    <HBadge variant="destructive" as="a" href="#">Destructive</HBadge>
    <HBadge variant="outline" as="a" href="#">Outline</HBadge>
    <HBadge as="a" href="#"> <CheckIcon />icon </HBadge>
  </div>
</template>
```
