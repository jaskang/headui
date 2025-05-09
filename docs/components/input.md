# Input

## default

```vue demo
<script setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const val = ref('val')
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <HInput v-model:value="val" class="" placeholder="搜索">
      <template #prefix>
        <MagnifyingGlassIcon class="ml-3 h-4 w-4" />
      </template>
    </HInput>
  </div>
</template>
```

## status

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HInput class="w-full" />
    <HInput status="success" class="w-full" />
    <HInput status="warning" class="w-full" />
    <HInput status="danger" class="w-full" />
  </div>
</template>
```

## prefix & suffix

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HInput prefix="prefix" class="w-full" />
    <HInput suffix="suffix" class="w-full" />
    <HInput prefix="prefix" suffix="suffix" class="w-full" />
  </div>
</template>
```

## disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HInput disabled class="w-full" />
    <HInput disabled prefix="prefix" class="w-full" />
  </div>
</template>
```

## SpaceCompact

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <SpaceCompact class="w-full">
      <HInput />
      <Button>button</Button>
    </SpaceCompact>
    <SpaceCompact class="w-full">
      <HInput />
      <HInput />
      <HInput />
      <HInput />
    </SpaceCompact>
    <SpaceCompact class="w-full">
      <HInput />
      <Select
        placeholder="请选择"
        class="w-36"
        :options="[
          { value: 1, label: 'Wade Cooper' },
          { value: 2, label: 'Arlene Mccoy' },
          { value: 3, label: 'Devon Webb' },
          { value: 4, label: 'Tom Cook' },
          { value: 5, label: 'Tanya Fox' },
          { value: 6, label: 'Hellen Schmvaluet' },
          { value: 7, label: 'Caroline Schultz' },
          { value: 8, label: 'Mason Heaney' },
          { value: 9, label: 'Claudie Smitham' },
          { value: 10, label: 'Emil Schaefer' },
        ]"
      />
    </SpaceCompact>
  </div>
</template>
```

## Props

| Prop     | Type                   | Default | Description                  |
| -------- | ---------------------- | ------- | ---------------------------- |
| variant  | 'secondary' \| 'ghost' | -       | Variant of the button        |
| size     | 'sm' \|'md' \| 'lg'    | 'md'    | Size of the button           |
| pill     | boolean                | false   | Pill style of the button     |
| square   | boolean                | false   | Square style of the button   |
| loading  | boolean                | false   | Loading state of the button  |
| disabled | boolean                | false   | Disabled state of the button |
| color    | string                 | -       | Color of the button          |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
