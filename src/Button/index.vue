<script setup lang="ts">
import { type PropType } from 'vue'
import Loading from '../Icon/Loading.vue'

defineOptions({ name: 'TButton' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'solid' | 'soft' | 'outline' | 'text' | 'pure' | 'default'>,
    default: 'default',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger'>,
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
    class="focus-visible:outline-primary-solid inline-flex cursor-pointer appearance-none items-center justify-center text-center font-medium whitespace-nowrap transition-[color,background-color,text-decoration-color] outline-none focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      {
        default: `style-default shadow-sm`,
        outline: `style-outline shadow-sm`,
        solid: `style-solid shadow-sm`,
        soft: `style-soft shadow-sm`,
        text: `style-text`,
        pure: '',
      }[props.variant],
      {
        primary: 'style-color-primary',
        success: 'style-color-success',
        warning: 'style-color-warning',
        danger: 'style-color-danger',
        none: '',
      }[props.variant === 'default' ? 'none' : props.color],
      {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      }[props.size],
      {
        sm: `h-7 text-xs ${props.square ? 'w-7' : 'px-2 py-1'}`,
        md: `h-9 text-sm ${props.square ? 'w-9' : 'px-3 py-1.5'}`,
        lg: `h-11 text-base ${props.square ? 'w-11' : 'px-4 py-2'}`,
      }[props.size],
      props.pill ? 'rounded-full' : 'rounded-md',
      !props.square && props.block ? 'w-full' : '',
    ]"
    :disabled
    @click="emit('click', $event)"
  >
    <template v-if="loading || slots.icon">
      <span class="[:where(&_>_*)]:h-[1em] [:where(&_>_*)]:w-[1em]" :class="slots.default && !square ? 'mr-1.5' : ''">
        <Loading v-if="loading" class="animate-spin" />
        <slot v-else name="icon" />
      </span>
    </template>
    <!-- 一比一样式 loading 时不展示内容 -->
    <slot v-if="!square || !loading"></slot>
  </button>
</template>
