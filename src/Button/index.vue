<script setup lang="ts">
import { type PropType } from 'vue'
import Loading from '../Icon/Loading.vue'

defineOptions({ name: 'HButton' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  pill: Boolean,
  square: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
})
</script>
<template>
  <button
    type="button"
    :class="[
      'inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap transition-all outline-none',
      '[&_svg]:nosize:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0',
      'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
      'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
      'disabled:pointer-events-none disabled:opacity-50',
      {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs',
        destructive:
          'bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 text-white shadow-xs',
        outline:
          'bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 border shadow-xs',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      }[props.variant],
      {
        sm: `h-7 text-xs ${props.square ? 'w-7' : 'gap-1.5 px-3 has-[>svg]:px-2.5'}`,
        md: `h-9 text-sm ${props.square ? 'w-9' : 'gap-2 px-4 has-[>svg]:px-3'}`,
        lg: `h-11 text-base ${props.square ? 'w-11' : 'gap-2 px-6 has-[>svg]:px-4'}`,
      }[props.size],
      props.pill ? 'rounded-full' : 'rounded-md',
      !props.square && props.block ? 'w-full' : '',
    ]"
    :disabled
    @click="emit('click', $event)"
  >
    <template v-if="loading || slots.icon">
      <Loading v-if="loading" class="animate-spin" />
      <slot v-else name="icon" />
    </template>
    <!-- 一比一样式 loading 时不展示内容 -->
    <slot v-if="!square || !loading"></slot>
  </button>
</template>
