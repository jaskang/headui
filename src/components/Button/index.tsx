import {
  type ComponentObjectPropsOptions,
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  type SlotsType,
  type VNode,
} from 'vue'

import type { UserColor } from '@/theme/colors'

import { LoadingIcon } from '../Icon'
import { useButtonStyle } from './style'

const props = {
  variant: {
    type: String as PropType<'default' | 'solid' | 'soft' | 'plain' | 'link'>,
    default: 'default',
    validator: (val: string) => ['default', 'solid', 'soft', 'plain', 'link'].includes(val),
  },
  color: {
    type: String as PropType<UserColor>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  pill: Boolean,
  square: Boolean,
  circle: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
} satisfies ComponentObjectPropsOptions

export type ButtonInnerProps = ExtractPropTypes<typeof props>

export type ButtonProps = ExtractPublicPropTypes<typeof props>

export const Button = defineComponent({
  name: 'TButton',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  slots: Object as SlotsType<{
    default: () => VNode
    icon: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const ownStyle = useButtonStyle(() => props)

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => (
      <button
        style={ownStyle.value.style}
        class={ownStyle.value.class}
        type="button"
        disabled={props.disabled}
        onClick={onClick}
      >
        {hasIcon.value && (
          <i class="t-btn-icon h-[1em] w-[1em] scale-125 [&+*]:ml-[0.5em] [&>svg]:!h-full [&>svg]:!w-full">
            {props.loading ? <LoadingIcon class="animate-spin" /> : slots.icon?.()}
          </i>
        )}
        {slots.default && <span class="t-btn_body flex items-center">{slots.default()}</span>}
      </button>
    )
  },
})
