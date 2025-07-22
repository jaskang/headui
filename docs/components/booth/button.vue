<script setup lang="ts">
import { Button, Radio, RadioGroup, Switch } from 'headui'
import { InboxIcon } from 'lucide-vue-next'
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

const variant = ref<'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'>('default')
const size = ref<ThemeSize>('default')
const pill = ref(false)
const square = ref(false)
const loading = ref(false)
const disabled = ref(false)
</script>
<template>
  <div class="flex w-full flex-col rounded-md border border-gray-200 md:flex-row-reverse">
    <div class="flex-1 space-y-4 border-gray-200 p-6 md:border-l">
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">variant:</div>
        <RadioGroup v-model:value="variant" class="grid flex-1 grid-cols-3 gap-2 py-2">
          <Radio value="default" class="col-span-1">default</Radio>
          <Radio value="secondary" class="col-span-1">secondary</Radio>
          <Radio value="destructive" class="col-span-1">destructive</Radio>
          <Radio value="outline" class="col-span-1">outline</Radio>
          <Radio value="ghost" class="col-span-1">ghost</Radio>
          <Radio value="link" class="col-span-1">link</Radio>
        </RadioGroup>
      </div>

      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">size:</div>
        <RadioGroup v-model:value="size" class="grid flex-1 grid-cols-3 gap-2 py-2">
          <Radio value="default">default</Radio>
          <Radio value="sm">sm</Radio>
          <Radio value="lg">lg</Radio>
        </RadioGroup>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">pill:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="pill"></Switch>
        </div>
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">square:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="square"></Switch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">loading:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="loading"></Switch>
        </div>
      </div>
      <div class="flex items-start">
        <div class="mr-4 w-16 py-2 text-right text-sm font-semibold">disabled:</div>
        <div class="grid flex-1 grid-cols-3 py-1.5">
          <Switch v-model:value="disabled"></Switch>
        </div>
      </div>
    </div>
    <div class="flex flex-1 items-center justify-center p-6">
      <Button :variant :size :pill :square :loading :disabled>
        <InboxIcon v-if="square" />
        <template v-else>Button</template>
      </Button>
    </div>
  </div>
</template>
