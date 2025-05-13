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
    <HButton>default</HButton>
    <HButton variant="secondary">secondary</HButton>
    <HButton variant="destructive">destructive</HButton>
    <HButton variant="outline">outline</HButton>
    <HButton variant="ghost">ghost</HButton>
    <HButton variant="link">link</HButton>
  </div>
</template>
```

## Pill

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HButton pill>button</HButton>
    <HButton variant="outline" pill>outline</HButton>
    <HButton variant="secondary" pill>secondary</HButton>
  </div>
</template>
```

## Square

```vue demo
<template>
  <div class="flex items-center gap-2">
    <HButton square>D</HButton>
    <HButton variant="outline" square>D</HButton>
    <HButton variant="secondary" square>D</HButton>
  </div>
</template>
```

## block

```vue demo
<template>
  <div class="space-y-2">
    <HButton block>block button</HButton>
  </div>
</template>
```

## Sizes

```vue demo
<template>
  <div class="flex flex-wrap items-center gap-2">
    <HButton size="sm">size: sm</HButton>
    <HButton size="md">size: md</HButton>
    <HButton size="lg">size: lg</HButton>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HButton disabled>primary</HButton>
    <HButton variant="secondary" disabled>secondary</HButton>
    <HButton variant="destructive" disabled>destructive</HButton>
    <HButton variant="outline" disabled>outline</HButton>
    <HButton variant="ghost" disabled>ghost</HButton>
    <HButton variant="link" disabled>link</HButton>
  </div>
</template>
```

## Loading

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HButton loading>primary</HButton>
    <HButton variant="outline" loading>outline</HButton>
    <HButton variant="secondary" loading>secondary</HButton>
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
    <HButton square>
      <TrashIcon />
    </HButton>
    <HButton square variant="outline">
      <TrashIcon />
    </HButton>
    <HButton square variant="secondary">
      <TrashIcon />
    </HButton>
    <HButton square variant="destructive">
      <TrashIcon />
    </HButton>
  </div>
</template>
```

## SpaceCompact

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <SpaceCompact>
      <Tooltip content="Like">
        <HButton>button</HButton>
      </Tooltip>
      <Tooltip content="Comment">
        <HButton variant="soft" color="primary">button</HButton>
      </Tooltip>
      <Tooltip content="Star">
        <HButton variant="soft" color="success">button</HButton>
      </Tooltip>
      <Tooltip content="Heart">
        <HButton>button</HButton>
      </Tooltip>
      <Tooltip content="Share">
        <HButton>button</HButton>
      </Tooltip>
      <Tooltip content="Download">
        <HButton>button</HButton>
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
