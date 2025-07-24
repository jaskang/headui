<script>
  import { Switch } from 'headui'
</script>

# Switch

开关

## Default

```vue demo
<script setup>
import { ref } from 'vue'
import { Switch } from 'headui'
const val = ref(true)
</script>
<template>
  <div class="flex items-center gap-2">
    <Switch id="switch-1" v-model:value="val" /> <label for="switch-1"> value: {{ val }} </label>
  </div>
</template>
```

## Icon

```vue demo
<script setup>
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { Switch } from 'headui'
</script>
<template>
  <div class="flex flex-wrap items-center gap-2">
    <Switch id="switch-2">
      <template #icon-on>
        <MoonIcon />
      </template>
      <template #icon-off>
        <SunIcon />
      </template>
    </Switch>
    <label for="switch-2"> dark mode </label>
  </div>
</template>
```

## disabled

```vue demo
<script setup>
import { Switch } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Switch disabled />
  </div>
</template>
```

[[doc]]
