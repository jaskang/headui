# CheckboxGroup

```vue demo
<script setup>
import { Checkbox, CheckboxGroup } from 'headui'
import { ref } from 'vue'
const checkList = ref(['A'])
</script>
<template>
  checkList: {{ checkList }}
  <CheckboxGroup class="mt-2 flex gap-4" v-model:value="checkList">
    <Checkbox value="A">A</Checkbox>
    <Checkbox value="B">B</Checkbox>
  </CheckboxGroup>
</template>
```

## Default

```vue demo
<script setup>
import { Checkbox } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Checkbox value="A">checkbox</Checkbox>
    <Checkbox value="B" checked>checkbox</Checkbox>
  </div>
</template>
```

## Disabled

```vue demo
<script setup>
import { Checkbox, CheckboxGroup } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <CheckboxGroup disabled>
      <Checkbox value="A" :default-value="true"> checked </Checkbox>
      <Checkbox value="B" :default-value="false">unchecked</Checkbox>
    </CheckboxGroup>
  </div>
  <div class="flex flex-wrap gap-2">
    <Checkbox value="A" disabled :default-value="true"> checked </Checkbox>
    <Checkbox value="B" disabled :default-value="false">unchecked</Checkbox>
  </div>
</template>
```

[[doc]]
