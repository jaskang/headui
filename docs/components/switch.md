# Switch

开关

## Default

```vue demo
<script setup>
import { ref } from 'vue'
const val = ref(true)
</script>
<template>
  <div class="flex items-center gap-2">
    <HSwitch id="switch-1" v-model:checked="val" /> <label for="switch-1"> value: {{ val }} </label>
  </div>
</template>
```

## Icon

```vue demo
<script setup>
import { MoonIcon, SunIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <HSwitch id="switch-2">
      <template #icon-on>
        <MoonIcon />
      </template>
      <template #icon-off>
        <SunIcon />
      </template>
    </HSwitch>
    <label for="switch-2"> dark mode </label>
  </div>
</template>
```

## disabled

```vue demo
<template>
  <div class="flex flex-wrap gap-2">
    <HSwitch disabled />
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
