# RadioGroup

```vue demo
<script setup>
import { ref } from 'vue'

const picked = ref('A')
</script>
<template>
  <div>
    picked: {{ picked }}
    <HRadioGroup class="mt-2 flex gap-4" v-model:value="picked">
      <HRadio value="A">A</HRadio>
      <HRadio value="B">B</HRadio>
    </HRadioGroup>
  </div>
</template>
```

## Default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HRadio value="A">checkbox</HRadio>
    <HRadio value="B" checked>checkbox</HRadio>
  </div>
</template>
```

## RadioCard

```vue demo
<template>
  <div class="flex flex-col gap-4">
    <HRadioGroup class="flex gap-4">
      <HRadioCard value="A" class="flex flex-col">
        <span class="font-semibold">8-core CPU</span>
        <span>32 GB RAM</span>
      </HRadioCard>
      <HRadioCard value="B" class="flex flex-col">
        <span class="font-semibold">6-core CPU</span>
        <span>24 GB RAM</span>
      </HRadioCard>
      <HRadioCard value="C" class="flex flex-col">
        <span class="font-semibold">4-core CPU</span>
        <span>16 GB RAM</span>
      </HRadioCard>
    </HRadioGroup>
  </div>
</template>
```

## RadioCard size

```vue demo
<template>
  <div class="flex flex-col gap-4">
    <HRadioGroup class="flex gap-4" size="sm">
      <HRadioCard value="A">value A</HRadioCard>
      <HRadioCard value="B">value B</HRadioCard>
      <HRadioCard value="C">value B</HRadioCard>
    </HRadioGroup>
    <HRadioGroup class="flex gap-4" size="lg">
      <HRadioCard value="A">value A</HRadioCard>
      <HRadioCard value="B">value B</HRadioCard>
      <HRadioCard value="C">value B</HRadioCard>
    </HRadioGroup>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HRadio value="A" disabled checked> checked </HRadio>
    <HRadio value="B" disabled>unchecked</HRadio>
  </div>
</template>
```

## Props

| Prop        | Type    | Default | Description                   |
| ----------- | ------- | ------- | ----------------------------- |
| **checked** | boolean | false   | whether the checkbox checked  |
| name        | string  | -       | input name                    |
| value       | any     | -       | value for group               |
| disabled    | boolean | false   | whether the checkbox disabled |

## Slots

| Name    | Description |
| ------- | ----------- |
| default | children    |
