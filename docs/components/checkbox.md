# CheckboxGroup

```vue demo
<script setup>
import { ref } from 'vue'
const checkList = ref(['A'])
</script>
<template>
  checkList: {{ checkList }}
  <HCheckboxGroup class="mt-2 flex gap-4" v-model:value="checkList">
    <HCheckbox value="A">A</HCheckbox>
    <HCheckbox value="B">B</HCheckbox>
  </HCheckboxGroup>
</template>
```

## Default

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HCheckbox value="A">checkbox</HCheckbox>
    <HCheckbox value="B" checked>checkbox</HCheckbox>
  </div>
</template>
```

## Disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HCheckbox value="A" disabled checked> checked </HCheckbox>
    <HCheckbox value="B" disabled>unchecked</HCheckbox>
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
