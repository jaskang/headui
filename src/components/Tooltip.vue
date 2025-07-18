<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from 'reka-ui'
import { computed, ref } from 'vue'

defineOptions({ name: 'Tooltip' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger
        class="text-grass11 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full border bg-white shadow-sm outline-none hover:bg-stone-50 focus:shadow-[0_0_0_2px] focus:shadow-black"
      >
        <Icon icon="radix-icons:plus" />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          class="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-grass11 rounded-md border bg-white px-[15px] py-[10px] text-sm leading-none shadow-sm will-change-[transform,opacity] select-none"
          :side-offset="5"
        >
          Add to library
          <TooltipArrow class="fill-white stroke-gray-200" :width="12" :height="6" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
