# Avatar

## 基础用法

```vue demo
<script setup>
import { Avatar } from 'headui'
</script>
<template>
  <div>
    <Avatar src="https://i.pravatar.cc/150?u=1" />
  </div>
</template>
```

## border

```vue demo
<script setup>
import { Avatar } from 'headui'
</script>
<template>
  <div class="flex items-center gap-4">
    <Avatar src="https://i.pravatar.cc/150?u=1" />
    <Avatar src="https://i.pravatar.cc/150?u=2" />
    <Avatar src="https://i.pravatar.cc/150?u=3" />
    <Avatar src="https://i.pravatar.cc/150?u=4" />
    <Avatar src="https://i.pravatar.cc/150?u=5" />
  </div>
</template>
```

## 基础用法

```vue demo
<script setup>
import { Avatar } from 'headui'
</script>
<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <Avatar size="sm" src="https://i.pravatar.cc/150?u=1" />
      <Avatar size="md" src="https://i.pravatar.cc/150?u=2" />
      <Avatar size="lg" src="https://i.pravatar.cc/150?u=3" />
    </div>
    <div class="flex items-center gap-4">
      <Avatar size="sm" rounded src="https://i.pravatar.cc/150?u=1" />
      <Avatar size="md" rounded src="https://i.pravatar.cc/150?u=2" />
      <Avatar size="lg" rounded src="https://i.pravatar.cc/150?u=3" />
    </div>
  </div>
</template>
```
