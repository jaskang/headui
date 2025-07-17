<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string | string[]
}>()
</script>

<template>
  <div
    :class="
      cn(
        'flex items-center space-x-[-1px] [&>*]:rounded-none [&>*]:first:rounded-l-md [&>*]:last:rounded-r-md [&>*]:focus-within:z-10',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
