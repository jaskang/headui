<script setup lang="ts">
import { InboxIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
defineOptions({ name: 'ButtonBooth' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

// a = 'sadf'
// pill: Boolean,
//   square: Boolean,
//   block: Boolean,
//   loading: Boolean,
//   disabled: Boolean,

const variant = ref<'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'>('primary')
const size = ref<'sm' | 'md' | 'lg'>('md')
const pill = ref(false)
const square = ref(false)
const block = ref(false)
const loading = ref(false)
const disabled = ref(false)
</script>
<template>
  <div class="flex w-full flex-col rounded-md border border-gray-200 md:flex-row-reverse">
    <div class="flex-1 space-y-4 border-gray-200 p-6 md:border-l">
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">variant:</div>
        <HRadioGroup v-model:value="variant" class="grid flex-1 grid-cols-3 gap-2 py-2">
          <HRadio value="primary" class="col-span-1">default</HRadio>
          <HRadio value="secondary" class="col-span-1">secondary</HRadio>
          <HRadio value="destructive" class="col-span-1">destructive</HRadio>
          <HRadio value="outline" class="col-span-1">outline</HRadio>
          <HRadio value="ghost" class="col-span-1">ghost</HRadio>
          <HRadio value="link" class="col-span-1">link</HRadio>
        </HRadioGroup>
      </div>

      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">size:</div>
        <HRadioGroup v-model:value="size" class="grid flex-1 grid-cols-3 gap-2 py-2">
          <HRadio value="sm">sm</HRadio>
          <HRadio value="md">md</HRadio>
          <HRadio value="lg">lg</HRadio>
        </HRadioGroup>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">pill:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <HSwitch v-model:value="pill"></HSwitch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">square:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <HSwitch v-model:value="square"></HSwitch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">block:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <HSwitch v-model:value="block"></HSwitch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">loading:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <HSwitch v-model:value="loading"></HSwitch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">disabled:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <HSwitch v-model:value="disabled"></HSwitch>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center p-6">
      <HButton :variant :size :pill :square :block :loading :disabled>
        <InboxIcon v-if="square" />
        <template v-else>Button</template>
      </HButton>
    </div>
  </div>
</template>
