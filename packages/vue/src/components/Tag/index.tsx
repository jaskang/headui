import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
} from 'vue'

import type { Color } from '@/theme/colors'
import { useColorVars } from '@/utils/style'
import { tw } from '@/utils/tw'

const props = {
  variant: {
    type: String as PropType<'solid' | 'outline'>,
    default: 'solid',
  },
  color: {
    type: String as PropType<Color>,
  },
  closeable: Boolean,
  dot: Boolean,
  pill: Boolean,
}

export type TagProps = ExtractPropTypes<typeof props>

export type TagPublicProps = ExtractPublicPropTypes<typeof props>

const createClass = tw(
  `inline-flex items-center text-xs font-medium px-2 py-1 bg-[--z-tag-bg] text-[--z-tag-text]`,
  {
    variants: {
      variant: {
        outline: 'ring-1 ring-inset ring-[--z-tag-border] dark:ring-gray-50',
        solid: '',
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-md',
      },
    },
  }
)

export const Tag = defineComponent({
  name: 'ZTag',
  props,
  emits: {
    click: (payload: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    const cssVars = useColorVars('z-tag', () => {
      const color = props.color
      return {
        text: color ? `${color}.700` : 'slate.700',
        bg: color ? `${color}.100` : 'white',
        dot: color ? `${color}.500` : 'slate.500',
        border: props.variant === 'solid' ? `transparent` : color ? `${color}.300` : 'gray.300',
        close: color ? `${color}.200` : 'slate.200',
      }
    })
    const cls = computed(() =>
      createClass({
        variant: props.variant,
        pill: props.pill,
      })
    )

    const outlineDot = computed(() => props.variant === 'outline' && props.dot)
    return () => (
      <div style={cssVars.value} class={`${cls.value} group`}>
        {props.dot && (
          <svg
            class="mr-1.5 h-[0.5em] w-[0.5em] fill-[--z-tag-dot]"
            viewBox="0 0 6 6"
            aria-hidden="true"
          >
            <circle cx="3" cy="3" r="3" />
          </svg>
        )}
        {slots.default?.()}
        {props.closeable && (
          <button
            type="button"
            class={[
              'relative -mr-1 ml-0.5 h-4 w-4 ',
              outlineDot.value ? 'hover:bg-gray-200' : 'hover:bg-[--z-tag-close]',
              props.pill ? 'rounded-full' : 'rounded-sm',
            ]}
          >
            <svg
              viewBox="0 0 14 14"
              class={['h-4 w-4', outlineDot.value ? 'stroke-gray-700' : 'stroke-[--z-tag-text]']}
            >
              <path d="M4 4l6 6m0-6l-6 6" />
            </svg>
          </button>
        )}
      </div>
    )
  },
})
