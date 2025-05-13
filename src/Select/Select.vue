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
  disabled?: boolean
  value: AcceptableValue
  label: string
}

export type HSelectGroupOption = {
  group: string
  options: HSelectOption[]
}

defineSlots<{ item?: (props: { active: boolean; placeholder?: string }) => any }>()
const emit = defineEmits(['update:value', 'change', 'select'])
const props = defineProps<
  Omit<SelectRootProps, 'modelValue' | 'open'> & {
    options?: HSelectOption[]
    groups?: HSelectGroupOption[]
    placeholder?: string
  }
>()
const value = defineModel<AcceptableValue | AcceptableValue[]>('value')

const groups = computed(() => {
  if (props.groups) {
    return props.groups
  }
  if (props.options) {
    return [{ group: '', options: props.options }]
  }
  return []
})
</script>
<template>
  <SelectRoot v-model="value" v-bind="props">
    <SelectTrigger
      :class="[
        'border-input flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none',
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
        :class="[
          'bg-popover text-popover-foreground relative z-50 overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          'data-[state=open]:animate-in',
          'data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0',
          'data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95',
          'data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2',
          'data-[side=left]:slide-in-from-right-2',
          'data-[side=right]:slide-in-from-left-2',
          'data-[side=top]:slide-in-from-bottom-2',
          'max-h-(--reka-select-content-available-height) min-w-[8rem] origin-(--reka-select-content-transform-origin)',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=bottom]:translate-y-1',
          'data-[side=left]:slide-in-from-right-2 data-[side=left]:-translate-x-1',
          'data-[side=right]:slide-in-from-left-2 data-[side=right]:translate-x-1',
          'data-[side=top]:slide-in-from-bottom-2 data-[side=top]:-translate-y-1',
        ]"
        :side-offset="5"
      >
        <SelectScrollUpButton class="flex cursor-default items-center justify-center py-1">
          <ChevronUpIcon class="size-4" />
        </SelectScrollUpButton>
        <SelectViewport class="p-2">
          <template v-for="(group, index) in groups" :key="index">
            <SelectLabel class="text-muted-foreground px-2 py-1.5 text-xs" v-if="group.group">
              {{ group.group }}
            </SelectLabel>
            <SelectGroup>
              <SelectItem
                v-for="(option, index) in group.options"
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
                  {{ option.label }}
                </SelectItemText>
              </SelectItem>
            </SelectGroup>
            <!-- <SelectSeparator class="bg-green6 m-[5px] h-[1px]" /> -->
          </template>
        </SelectViewport>

        <SelectScrollDownButton class="flex cursor-default items-center justify-center py-1">
          <ChevronDownIcon class="size-4" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
  <!-- <div
    data-radix-popper-content-wrapper=""
    dir="ltr"
    style="
      position: fixed;
      left: 0px;
      top: 0px;
      transform: translate(485px, 10px);
      min-width: max-content;
      --radix-popper-transform-origin: 0% 254.977px;
      will-change: transform;
      z-index: 50;
      --radix-popper-available-width: 1772px;
      --radix-popper-available-height: 254.9765625px;
      --radix-popper-anchor-width: 180px;
      --radix-popper-anchor-height: 36px;
    "
  >
    <div
      data-side="top"
      data-align="start"
      role="listbox"
      id="radix-«Rl37ldlb»"
      data-state="open"
      dir="ltr"
      data-slot="select-content"
      class="bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
      tabindex="-1"
      style="
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        outline: none;
        --radix-select-content-transform-origin: var(--radix-popper-transform-origin);
        --radix-select-content-available-width: var(--radix-popper-available-width);
        --radix-select-content-available-height: var(--radix-popper-available-height);
        --radix-select-trigger-width: var(--radix-popper-anchor-width);
        --radix-select-trigger-height: var(--radix-popper-anchor-height);
        pointer-events: auto;
      "
    >
      <style>
        [data-radix-select-viewport] {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        [data-radix-select-viewport]::-webkit-scrollbar {
          display: none;
        }
      </style>
      <div
        data-radix-select-viewport=""
        role="presentation"
        class="h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1 p-1"
        style="position: relative; flex: 1 1 0%; overflow: hidden auto"
      >
        <div
          role="option"
          aria-labelledby="radix-«r18u»"
          aria-selected="false"
          data-state="unchecked"
          tabindex="-1"
          data-slot="select-item"
          class="focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
          data-radix-collection-item=""
          data-highlighted=""
        >
          <span class="absolute right-2 flex size-3.5 items-center justify-center"></span
          ><span id="radix-«r18u»">Item 0</span>
        </div>
        <div
          role="option"
          aria-labelledby="radix-«r18v»"
          aria-selected="false"
          data-state="unchecked"
          tabindex="-1"
          data-slot="select-item"
          class="focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
          data-radix-collection-item=""
        >
          <span class="absolute right-2 flex size-3.5 items-center justify-center"></span
          ><span id="radix-«r18v»">Item 1</span>
        </div>
        <div
          role="option"
          aria-labelledby="radix-«r190»"
          aria-selected="false"
          data-state="unchecked"
          tabindex="-1"
          data-slot="select-item"
          class="focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
          data-radix-collection-item=""
        >
          <span class="absolute right-2 flex size-3.5 items-center justify-center"></span
          ><span id="radix-«r190»">Item 2</span>
        </div>
      </div>
      <div
        aria-hidden="true"
        data-slot="select-scroll-down-button"
        class="flex cursor-default items-center justify-center py-1"
        style="flex-shrink: 0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down size-4"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
    </div>
  </div> -->
</template>
