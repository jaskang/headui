# Textarea

## 基础用法

```vue demo
<script setup>
import { Textarea } from 'sinvue'
import { ref } from 'vue'
</script>
<template>
  <Textarea placeholder="请输入内容" />
</template>
```

## 基础用法

```vue demo
<script setup>
import { Textarea } from 'sinvue'
import { ref } from 'vue'
</script>
<template>
  <div class="flex flex-col gap-y-4">
    <Textarea placeholder="请输入内容" resize="vertical" />
    <Textarea placeholder="请输入内容" resize="horizontal" />
    <Textarea placeholder="请输入内容" resize="both" />
  </div>
</template>
```

## 状态

```vue demo
<script setup>
import { Textarea } from 'sinvue'
import { ref } from 'vue'
</script>
<template>
  <div class="flex flex-col gap-y-4">
    <Textarea placeholder="请输入内容" />
    <Textarea placeholder="请输入内容" status="success" />
    <Textarea placeholder="请输入内容" status="warning" />
    <Textarea placeholder="请输入内容" status="danger" />
  </div>
</template>
```

## 禁用

```vue demo
<script setup>
import { ref } from 'vue'
import { Textarea } from 'sinvue'
</script>
<template>
  <Textarea disabled placeholder="请输入内容" />
</template>
```
