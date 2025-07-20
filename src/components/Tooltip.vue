<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  type TooltipRootEmits,
  type TooltipRootProps,
  TooltipTrigger,
  useForwardPropsEmits,
} from 'reka-ui'
import { computed, ref } from 'vue'

export type TooltipProps = {
  content?: string
}
defineOptions({ name: 'Tooltip' })

const props = defineProps<TooltipRootProps & TooltipProps>()
const emits = defineEmits<TooltipRootEmits>()

const forward = useForwardPropsEmits(props, emits)
</script>
<template>
  <TooltipProvider :delay-duration="100">
    <TooltipRoot v-bind="forward">
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          data-slot="tooltip-content"
          :sideOffset="2"
          class="bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance"
        >
          <slot name="content">
            {{ props.content }}
          </slot>
          <TooltipArrow :width="11" :height="5" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
