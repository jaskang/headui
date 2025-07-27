<script setup lang="ts">
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'
import {
  type AcceptableValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  type SelectItemSelectEvent,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { computed, type PropType, ref, useTemplateRef, watch } from 'vue'

export type SelectOption = SelectItemOption | SelectGroupOption

export type SelectItemOption = {
  label: string
  value: AcceptableValue
  disabled?: boolean
}

export type SelectGroupOption = {
  label: string
  children: SelectItemOption[]
}

export type SelectProps = {
  /** 默认值 */
  defaultValue?: AcceptableValue | Array<AcceptableValue>
  /** 是否允许选择多个选项 */
  multiple?: boolean
  /** 禁用 */
  disabled?: boolean
  /**
   * 占位符
   */
  placeholder?: string
  /** 选项 */
  options?: SelectOption[]
}

const emit = defineEmits<{
  change: [value: AcceptableValue | AcceptableValue[]]
}>()
const props = withDefaults(defineProps<SelectProps>(), {
  options: () => [],
})
const value = defineModel<AcceptableValue | AcceptableValue[]>('value')

function isGroupOption(item: SelectOption): item is SelectGroupOption {
  return item && 'children' in item
}

const triggerRef = useTemplateRef('triggerRef')
const onSelect = (event: SelectItemSelectEvent<AcceptableValue | AcceptableValue[]>) => {
  // triggerRef.value?.$el?.focus()
}
</script>
<template>
  <SelectRoot data-slot="select" v-model="value" v-bind="props">
    <SelectTrigger
      ref="triggerRef"
      data-slot="select-trigger"
      data-size="default"
      class="border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground aria-invalid:ring-invalid dark:bg-input/30 dark:hover:bg-input/50 focus-visible:ring-focus flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4"
    >
      <SelectValue
        data-slot="select-value"
        class="line-clamp-1 flex items-center gap-2"
        :placeholder="props.placeholder"
      />
      <ChevronDownIcon class="size-4 opacity-50" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        position="popper"
        data-slot="select-content"
        :class="[
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--reka-select-content-available-height) min-w-[8rem] origin-(--reka-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        ]"
      >
        <SelectScrollUpButton
          data-slot="select-scroll-up-button"
          class="flex cursor-default items-center justify-center py-1"
        >
          <ChevronUpIcon class="size-4" />
        </SelectScrollUpButton>
        <SelectViewport
          class="h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1 p-1"
        >
          <template v-for="(option, index) in options">
            <template v-if="isGroupOption(option)">
              <SelectGroup data-slot="select-group" :key="'group-' + option.label">
                <SelectLabel data-slot="select-label" class="text-muted-foreground px-2 py-1.5 text-xs">
                  {{ option.label }}
                </SelectLabel>
                <SelectItem
                  v-for="(item, index) in option.children"
                  data-slot="select-item"
                  class="focus:bg-accent focus:text-accent-foreground [&_svg:not([class*=text-])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
                  :key="index"
                  :disabled="item.disabled"
                  :value="item.value"
                  @select="onSelect"
                >
                  <SelectItemIndicator class="absolute right-2 flex size-3.5 items-center justify-center">
                    <CheckIcon class="text-muted-foreground pointer-events-none size-4 shrink-0" />
                  </SelectItemIndicator>
                  <SelectItemText>
                    {{ item.label || item.value }}
                  </SelectItemText>
                </SelectItem>
              </SelectGroup>
            </template>
            <template v-else>
              <SelectItem
                data-slot="select-item"
                class="focus:bg-accent focus:text-accent-foreground [&_svg:not([class*=text-])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
                :key="index"
                :disabled="option.disabled"
                :value="option.value"
                @select="onSelect"
              >
                <SelectItemIndicator class="absolute right-2 flex size-4 items-center justify-center">
                  <CheckIcon class="text-muted-foreground pointer-events-none size-4 shrink-0" />
                </SelectItemIndicator>
                <SelectItemText>
                  {{ option.label || option.value }}
                </SelectItemText>
              </SelectItem>
            </template>
          </template>
        </SelectViewport>

        <SelectScrollDownButton
          data-slot="select-scroll-down-button"
          class="flex cursor-default items-center justify-center py-1"
        >
          <ChevronDownIcon class="size-4" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>
