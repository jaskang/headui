<script setup lang="ts">
import {
  ListboxContent,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
  ListboxItemIndicator,
  ListboxRoot,
} from 'reka-ui'

defineProps<{
  fruits: string[]
  vegetables: string[]
}>()
</script>

<template>
  <ListboxRoot
    class="text-grass9 mx-auto flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm dark:border-stone-900"
  >
    <ListboxContent class="h-72 w-48 overflow-auto p-[5px]">
      <ListboxGroup>
        <ListboxGroupLabel class="text-mauve11 px-[25px] text-xs leading-[25px]"> Fruits </ListboxGroupLabel>
        <ListboxItem
          v-for="i in fruits"
          :key="i"
          :value="i"
          class="text-grass9 data-[highlighted]:ring-grass9 focus:ring-grass9 data-[state=checked]:bg-grass9 relative flex h-[25px] w-full items-center rounded px-[25px] text-xs leading-none outline-none select-none focus:ring-1 data-[disabled]:opacity-50 data-[highlighted]:ring-1 data-[state=checked]:text-white"
        >
          <ListboxItemIndicator class="absolute left-0 inline-flex w-[25px] items-center justify-center">
            <Icon icon="radix-icons:check" />
          </ListboxItemIndicator>
          <span>{{ i }}</span>
        </ListboxItem>
      </ListboxGroup>

      <ListboxGroup class="mt-2">
        <ListboxGroupLabel class="text-mauve11 px-[25px] text-xs leading-[25px]"> Vegetables </ListboxGroupLabel>
        <ListboxItem
          v-for="i in vegetables"
          :key="i"
          :value="i"
          class="text-grass9 data-[highlighted]:ring-grass9 focus:ring-grass9 data-[state=checked]:bg-grass9 relative flex h-[25px] w-full items-center rounded px-[25px] text-xs leading-none outline-none select-none focus:ring-1 data-[disabled]:opacity-50 data-[highlighted]:ring-1 data-[state=checked]:text-white"
        >
          <ListboxItemIndicator class="absolute left-0 inline-flex w-[25px] items-center justify-center">
            <Icon icon="radix-icons:check" />
          </ListboxItemIndicator>
          <span>{{ i }}</span>
        </ListboxItem>
      </ListboxGroup>
    </ListboxContent>
  </ListboxRoot>
</template>
