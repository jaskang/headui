<script setup lang="ts">
import { SwitchRoot, type SwitchRootProps, SwitchThumb } from 'reka-ui'
import { computed, watch } from 'vue'
import { cn } from '@/lib/utils'

export type SwitchProps = {
  disabled?: boolean
  class?: string
}

const emit = defineEmits<{ change: [boolean] }>()
const props = withDefaults(defineProps<SwitchProps>(), {})
const value = defineModel<boolean>('value', { default: false })

watch(value, v => {
  emit('change', v!)
})

const rootClass = computed(() => {
  return cn(
    'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
    props.class
  )
})
</script>
<template>
  <SwitchRoot :disabled="disabled" v-model="value" :class="rootClass">
    <SwitchThumb
      class="bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none flex size-4 items-center justify-center rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0 [&>svg]:size-3"
    >
      <slot v-if="value" name="icon-on" />
      <slot v-else name="icon-off" />
    </SwitchThumb>
  </SwitchRoot>
</template>
