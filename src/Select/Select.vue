<script setup lang="ts">
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-vue-next'
import {
  type AcceptableValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  type SelectRootProps,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { computed, type PropType, ref } from 'vue'

defineOptions({ name: 'HSelect', inheritAttrs: false })

export type HSelectOption = {
  value: AcceptableValue
  label?: string
  disabled?: boolean
}

export type HSelectGroupOption = {
  title: string
  options: HSelectOption[]
}

defineSlots<{ item?: (props: { active: boolean; placeholder?: string }) => any }>()
const emit = defineEmits(['update:value', 'change', 'select'])
const props = withDefaults(
  defineProps<
    Omit<SelectRootProps, 'modelValue' | 'open'> & {
      options?: HSelectOption[] | HSelectGroupOption[]
      position?: 'item-aligned' | 'popper'
      placeholder?: string
    }
  >(),
  {
    options: () => [],
    position: 'popper',
  }
)
const value = defineModel<AcceptableValue | AcceptableValue[]>('value')
</script>
<template>
  <SelectRoot v-model="value" v-bind="props">
    <SelectTrigger
      :class="[
        'border-input flex cursor-pointer items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none',
        'data-[size=default]:h-9 data-[size=sm]:h-8',
        'data-[placeholder]:text-muted-foreground',
        '[&_svg:not([class*=text-])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'dark:aria-invalid:ring-destructive/40 dark:bg-input/30 dark:hover:bg-input/50',
        // '*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2',
      ]"
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
          'bg-popover text-popover-foreground relative z-50 overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
          'data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
          'max-h-(--reka-select-content-available-height) min-w-[8rem] origin-(--reka-select-content-transform-origin)',
          position === 'popper' &&
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
          :class="[
            'p-1',
            position === 'popper' &&
              'h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)] scroll-my-1',
          ]"
        >
          <template v-for="(option, index) in options" :key="index">
            <template v-if="'title' in option">
              <SelectGroup data-slot="select-group">
                <SelectLabel data-slot="select-label" class="text-muted-foreground px-2 py-1.5 text-xs">
                  {{ option.title }}
                </SelectLabel>
                <SelectItem
                  v-for="(item, index) in option.options"
                  data-slot="select-item"
                  :key="index"
                  :class="[
                    'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
                    'focus:bg-accent focus:text-accent-foreground',
                    'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                    '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
                  ]"
                  :disabled="item.disabled"
                  :value="item.value"
                >
                  <SelectItemIndicator class="absolute right-2 flex size-4 items-center justify-center">
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
                :key="index"
                :class="[
                  'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
                  'focus:bg-accent focus:text-accent-foreground',
                  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
                  '*:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
                ]"
                :disabled="option.disabled"
                :value="option.value"
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
