<script setup lang="ts">
import { Switch } from 'headui'
import { CodeIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'

defineOptions({ name: 'DemoWrapper' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; code?(_: {}): any }>()

const props = defineProps({
  lang: { type: String, required: true },
  meta: { type: String, required: true },
  code: { type: String, required: true },
})

const meta = computed(() =>
  (props.meta || '').split(' ').reduce(
    (prev, item) => {
      const arr = item.split('=', 2) as [string, string]
      return { ...prev, [arr[0]]: arr[1] || true }
    },
    {} as Record<string, any>
  )
)
const showCode = ref(false)
</script>
<template>
  <div
    class="demo-wrapper bg-accent divide-border ring-border flex flex-col divide-y overflow-hidden rounded shadow ring-1 [&+.demo-wrapper]:mt-8"
    :style="{
      '--tw-prose-pre-bg': 'transparent',
    }"
  >
    <div class="flex items-center justify-end px-2 py-1">
      <div class="flex-1">
        <svg viewBox="0 0 32 32" class="h-4 w-4">
          <path fill="#41b883" d="M24.4 3.925H30l-14 24.15L2 3.925h10.71l3.29 5.6l3.22-5.6Z"></path>
          <path fill="#41b883" d="m2 3.925l14 24.15l14-24.15h-5.6L16 18.415L7.53 3.925Z"></path>
          <path fill="#35495e" d="M7.53 3.925L16 18.485l8.4-14.56h-5.18L16 9.525l-3.29-5.6Z"></path>
        </svg>
      </div>
      <div class="flex items-center">
        <Switch v-model:value="showCode">
          <template #icon-on><CodeIcon /></template>
          <template #icon-off><CodeIcon /></template>
        </Switch>
      </div>
    </div>
    <div class="not-prose demo-wrapper-svg-bg bg-background p-4">
      <slot />
    </div>

    <div v-if="showCode" class="vp-code [&>div]:relative">
      <slot name="code" />
    </div>
  </div>
</template>
<style></style>
