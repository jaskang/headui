# Input

## default

```vue demo
<script setup>
import { ref } from 'vue'
import { Input } from 'headui'
import { SearchIcon } from 'lucide-vue-next'
const val = ref('val')
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Input v-model:value="val" class="" placeholder="搜索">
      <template #prefix>
        <SearchIcon />
      </template>
    </Input>
    {{ val }}
  </div>
</template>
```

## status

```vue demo
<script setup>
import { Input } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Input class="w-full" />
    <Input status="success" class="w-full" />
    <Input status="warning" class="w-full" />
    <Input status="danger" class="w-full" />
  </div>
</template>
```

## prefix & suffix

```vue demo
<script setup>
import { Input } from 'headui'
import { SearchIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Input class="w-full">
      <template #prefix><SearchIcon /></template>
    </Input>
    <Input class="w-full">
      <template #suffix><SearchIcon /></template>
    </Input>
    <Input class="w-full">
      <template #prefix>prefix</template>
    </Input>
    <Input class="w-full">
      <template #suffix>suffix</template>
    </Input>
  </div>
</template>
```

## size

```vue demo
<script setup>
import { Input } from 'headui'
import { SearchIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Input size="sm" class="w-full">
      <template #prefix><SearchIcon /></template>
      <template #suffix>suffix</template>
    </Input>
    <Input size="default" class="w-full">
      <template #prefix><SearchIcon /></template>
      <template #suffix>suffix</template>
    </Input>
    <Input size="lg" class="w-full">
      <template #prefix><SearchIcon /></template>
      <template #suffix>suffix</template>
    </Input>
  </div>
</template>
```

## disabled

```vue demo
<script setup>
import { Input } from 'headui'
import { SearchIcon } from 'lucide-vue-next'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Input disabled class="w-full" />
    <Input disabled class="w-full">
      <template #prefix>
        <SearchIcon />
      </template>
    </Input>
  </div>
</template>
```

## InputGroup

```vue demo
<script setup>
import { Input, Button, InputGroup, Select } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <InputGroup class="w-full">
      <Input />
      <Button>button</Button>
    </InputGroup>
    <InputGroup class="w-full">
      <Input />
      <Input />
      <Input />
      <Input />
    </InputGroup>
    <InputGroup class="w-full">
      <Input />
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
    </InputGroup>
  </div>
</template>
```

[[doc]]
