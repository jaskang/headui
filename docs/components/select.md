# Select

## default

```vue demo
<script setup>
import { Select, SelectItem, SelectGroup } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Select class="w-60" placeholder="选择框">
      <SelectItem value="1">Wade Cooper</SelectItem>
      <SelectItem value="2">Arlene Mccoy</SelectItem>
      <SelectItem value="3">Devon Webb</SelectItem>
      <SelectItem value="4">Tom Cook</SelectItem>
      <SelectItem value="5" disabled>Tanya Fox</SelectItem>
      <SelectItem value="6">Hellen Schmvaluet</SelectItem>
      <SelectItem value="7">Caroline Schultz</SelectItem>
      <SelectItem value="8">Mason Heaney</SelectItem>
      <SelectItem value="9">Claudie Smitham</SelectItem>
      <SelectItem value="10">Emil Schaefer</SelectItem>
    </Select>
    <Select class="w-60" placeholder="选择框">
      <SelectGroup label="Fruit">
        <SelectItem value="Apple">Apple</SelectItem>
        <SelectItem value="Banana">Banana</SelectItem>
        <SelectItem value="Blueberry">Blueberry</SelectItem>
        <SelectItem value="Grapes">Grapes</SelectItem>
        <SelectItem value="Pineapple">Pineapple</SelectItem>
      </SelectGroup>
      <SelectGroup label="Vegetables">
        <SelectItem value="Aubergine">Aubergine</SelectItem>
        <SelectItem value="Broccoli">Broccoli</SelectItem>
        <SelectItem value="Carrot">Carrot</SelectItem>
        <SelectItem value="Courgette">Courgette</SelectItem>
        <SelectItem value="Leek">Leek</SelectItem>
      </SelectGroup>
    </Select>
  </div>
</template>
```

## disabled

```vue demo
<script setup>
import { Select } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Select class="w-60" placeholder="选择框" value="2" disabled />
  </div>
</template>
```

## template

```vue demo
<script setup>
import { Select, SelectItem, Avatar } from 'headui'
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <Select class="w-60" placeholder="选择框">
      <SelectItem value="1">
        <Avatar class="-ml-1" rounded border size="sm" src="https://i.pravatar.cc/150?u=1" />
        <span class="ml-1 flex-1 overflow-hidden text-nowrap text-ellipsis"> Wade Cooper </span>
      </SelectItem>
      <SelectItem value="2">
        <Avatar class="-ml-1" rounded border size="sm" src="https://i.pravatar.cc/150?u=2" />
        <span class="ml-1 flex-1 overflow-hidden text-nowrap text-ellipsis"> Arlene Mccoy </span>
      </SelectItem>
      <SelectItem value="3">
        <Avatar class="-ml-1" rounded border size="sm" src="https://i.pravatar.cc/150?u=3" />
        <span class="ml-1 flex-1 overflow-hidden text-nowrap text-ellipsis"> Devon Webb </span>
      </SelectItem>
    </Select>
  </div>
</template>
```

<!-- @doc: ../../src/components/Select.vue -->
