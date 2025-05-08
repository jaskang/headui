---
hello: world
---

<script>
  import ButtonBooth from './booth/button.vue'
</script>

# Button

## 基础用法

<ButtonBooth/>

## 风格

Button 组件支持五种风格，通过 `variant` 属性设置。

分别为: `primary` | `secondary` | `destructive` | `outline` | `ghost` | `link`

```vue demo title=默认样式
<template>
  <div class="flex flex-wrap gap-2">
    <TButton>default</TButton>
    <TButton variant="secondary">secondary</TButton>
    <TButton variant="destructive">destructive</TButton>
    <TButton variant="outline">outline</TButton>
    <TButton variant="ghost">ghost</TButton>
    <TButton variant="link">link</TButton>
  </div>
</template>
```

## Pill

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton pill>button</TButton>
    <TButton variant="outline" pill>outline</TButton>
    <TButton variant="secondary" pill>secondary</TButton>
  </div>
</template>
```

## Square

```vue demo
<template>
  <div class="flex items-center gap-2">
    <TButton square>D</TButton>
    <TButton variant="outline" square>D</TButton>
    <TButton variant="secondary" square>D</TButton>
  </div>
</template>
```

## block

```vue demo
<template>
  <div class="space-y-2">
    <TButton block>block button</TButton>
  </div>
</template>
```

## Sizes

```vue demo
<template>
  <div class="flex flex-wrap items-center gap-2">
    <TButton size="sm">size: sm</TButton>
    <TButton size="md">size: md</TButton>
    <TButton size="lg">size: lg</TButton>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton disabled>primary</TButton>
    <TButton variant="secondary" disabled>secondary</TButton>
    <TButton variant="destructive" disabled>destructive</TButton>
    <TButton variant="outline" disabled>outline</TButton>
    <TButton variant="ghost" disabled>ghost</TButton>
    <TButton variant="link" disabled>link</TButton>
  </div>
</template>
```

## Loading

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <TButton loading>primary</TButton>
    <TButton variant="outline" loading>outline</TButton>
    <TButton variant="secondary" loading>secondary</TButton>
  </div>
</template>
```

## Icon

```vue demo
<script setup>
import { PaperAirplaneIcon, InboxIcon, TrashIcon, ArchiveBoxIcon, CircleStackIcon } from '@heroicons/vue/24/outline'
</script>
<template>
  <div class="flex items-center gap-2">
    <TButton square>
      <TrashIcon />
    </TButton>
    <TButton square variant="outline">
      <TrashIcon />
    </TButton>
    <TButton square variant="secondary">
      <TrashIcon />
    </TButton>
    <TButton square variant="destructive">
      <TrashIcon />
    </TButton>
  </div>
</template>
```

## SpaceCompact

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <SpaceCompact>
      <Tooltip content="Like">
        <TButton>button</TButton>
      </Tooltip>
      <Tooltip content="Comment">
        <TButton variant="soft" color="primary">button</TButton>
      </Tooltip>
      <Tooltip content="Star">
        <TButton variant="soft" color="success">button</TButton>
      </Tooltip>
      <Tooltip content="Heart">
        <TButton>button</TButton>
      </Tooltip>
      <Tooltip content="Share">
        <TButton>button</TButton>
      </Tooltip>
      <Tooltip content="Download">
        <TButton>button</TButton>
      </Tooltip>
    </SpaceCompact>
  </div>
</template>
```

## Props

| Prop     | Type                  | Default | Description                  |
| -------- | --------------------- | ------- | ---------------------------- |
| variant  | 'secondary' \| 'text' | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg'   | 'md'    | Size of the button           |
| pill     | boolean               | false   | Pill style of the button     |
| square   | boolean               | false   | Square style of the button   |
| loading  | boolean               | false   | Loading state of the button  |
| disabled | boolean               | false   | Disabled state of the button |
| color    | string                | -       | Color of the button          |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
