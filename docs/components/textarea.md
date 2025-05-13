# Textarea

## 基础用法

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <HTextarea placeholder="请输入内容" />
</template>
```

## 基础用法

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="flex flex-col gap-y-4">
    <HTextarea placeholder="请输入内容" resize="vertical" />
    <HTextarea placeholder="请输入内容" resize="horizontal" />
    <HTextarea placeholder="请输入内容" resize="both" />
  </div>
</template>
```

## 状态

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="flex flex-col gap-y-4">
    <HTextarea placeholder="请输入内容" />
    <HTextarea placeholder="请输入内容" status="success" />
    <HTextarea placeholder="请输入内容" status="warning" />
    <HTextarea placeholder="请输入内容" status="danger" />
  </div>
</template>
```

## 禁用

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <HTextarea disabled placeholder="请输入内容" />
</template>
```
