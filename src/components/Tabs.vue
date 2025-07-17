<script setup lang="ts">
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { cn } from '@/lib/utils'

type TabsProps = {
  defaultValue?: string
  items: Array<{ value: string; text: string } | string>
}

const props = withDefaults(
  defineProps<
    TabsProps & {
      class?: string | string[]
    }
  >(),
  {
    class: '',
  }
)
const value = defineModel<string>('value')
</script>

<template>
  <TabsRoot data-slot="tabs" :class="cn('flex flex-col gap-2', props.class)" v-bind="props" v-model="value">
    <TabsList
      data-slot="tabs-list"
      class="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
    >
      <TabsTrigger
        data-slot="tabs-trigger"
        class="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
        v-for="item in props.items"
        :key="typeof item === 'string' ? item : item.value"
        :value="typeof item === 'string' ? item : item.value"
      >
        {{ typeof item === 'string' ? item : item.text }}
      </TabsTrigger>
    </TabsList>
    <slot />
  </TabsRoot>
</template>
