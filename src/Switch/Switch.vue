<script setup lang="ts">
import { SwitchRoot, type SwitchRootProps, SwitchThumb } from 'reka-ui'
import { watch } from 'vue'

defineOptions({ name: 'HSwitch' })

const emit = defineEmits<{ change: [boolean] }>()
const props = defineProps<Omit<SwitchRootProps, 'as' | 'asChild' | 'modelValue'>>()
const value = defineModel<boolean>('value')

watch(value, v => {
  emit('change', v!)
})
</script>
<template>
  <SwitchRoot
    v-bind="props"
    v-model="value"
    :class="[
      'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-1 border-transparent p-[1px] shadow-xs transition-all outline-none',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'dark:data-[state=unchecked]:bg-input/80',
    ]"
  >
    <SwitchThumb
      class="bg-background text-accent-foreground pointer-events-none flex size-4 items-center justify-center overflow-hidden rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0 [&>svg]:size-3"
    >
      <slot v-if="value" name="icon-on" />
      <slot v-else name="icon-off" />
    </SwitchThumb>
  </SwitchRoot>
</template>
