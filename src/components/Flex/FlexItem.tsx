import {
  computed,
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  type PropType,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

type FlexType = number | 'auto' | 'initial' | 'none'

const props = {
  flex: {
    type: [Number, String] as PropType<FlexType>,
    default: 'none',
  },
}

export type FlexItemProps = ExtractPublicPropTypes<typeof props>

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }
  return flex
}

export const FlexItem = defineComponent({
  name: 'TFlexItem',
  props,
  setup(props, { slots, emit }) {
    const style = computed(() => {
      const flex = parseFlex(props.flex)
      return {
        flex,
      }
    })
    return () => (
      <div class="t-flex-item relative" style={style.value}>
        {slots.default?.()}
      </div>
    )
  },
})
