<script setup lang="ts">
import { computed, type PropType, ref } from 'vue'
import { ListBox } from '@/Base'
import type { InputValue } from '@/utils/theme'
import CheckIcon from '../Icon/CheckIcon.vue'
import ChevronDownIcon from '../Icon/ChevronDownIcon.vue'
import Popover from '../Popover/index.vue'
import { ScrollArea } from '../ScrollArea'
import type { SelectOption } from './types'

defineOptions({ name: 'HSelect', inheritAttrs: false })

const emit = defineEmits(['update:value', 'change', 'select'])
defineSlots<{ label?: (props: { active: boolean; item?: SelectOption; placeholder?: string }) => any }>()
const props = defineProps({
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
  size: String as PropType<'sm' | 'md' | 'lg'>,
  disabled: Boolean,
  clearable: Boolean,
  placeholder: String,
})
const model = defineModel<InputValue>('value', {
  set: v => emit('change', v),
})

const currItem = computed(() => props.options.find(item => item.value === model.value))

const label = computed(() => currItem.value?.label || '')

const popoverRef = ref<InstanceType<typeof Popover>>()
const buttonRef = ref<HTMLButtonElement>()

const selectHandler = (item: SelectOption) => {
  console.log('selectHandler', item)
  model.value = item.value
  emit('select', item)
  popoverRef.value?.toggle()
  buttonRef.value?.focus()
}

const focused = ref(false)
</script>
<template>
  <Popover trigger="click" placement="bottom-start" ref="popoverRef" size-mode="min-width" @change="v => (focused = v)">
    <button
      ref="buttonRef"
      class="focus:border-primary-500 focus:ring-primary-500 flex h-9 cursor-pointer items-center gap-1 rounded-md border border-gray-200 bg-white px-1 text-left text-sm shadow-sm outline-none focus:z-10 focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      v-bind="$attrs"
      :disabled
    >
      <div class="flex flex-1 items-center overflow-hidden pl-2 text-nowrap">
        <slot v-if="label" name="label" :active="false" :item="currItem" :placeholder>
          <span class="w-full text-nowrap text-ellipsis">
            {{ label }}
          </span>
        </slot>
        <span v-else class="text-gray-400">
          {{ placeholder }}
        </span>
      </div>
      <ChevronDownIcon class="mr-1 h-4 w-4 shrink-0"></ChevronDownIcon>
    </button>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col rounded text-sm shadow-md ring-1 ring-gray-200" mode="y">
        <ListBox :items="options" index-key="value" style="" @click="selectHandler">
          <template #item="{ item }">
            <div class="flex min-h-9 w-full items-center gap-1">
              <div class="flex flex-1 items-center overflow-hidden pl-2 text-nowrap">
                <slot name="label" :active="item.value === model" :item="item">
                  <span class="w-full text-nowrap text-ellipsis" :class="[item.value === model ? 'font-medium' : '']">
                    {{ item.label }}
                  </span>
                </slot>
              </div>
              <CheckIcon v-if="item.value === model" class="mr-2 h-4 w-4 shrink-0" />
            </div>
          </template>
        </ListBox>
      </ScrollArea>
    </template>
  </Popover>
</template>
