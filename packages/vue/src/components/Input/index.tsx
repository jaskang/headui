import {
  defineComponent,
  type ExtractPropTypes,
  type ExtractPublicPropTypes,
  ref,
  type SlotsType,
  type VNode,
} from 'vue'

import { useControllable } from '@/hooks/useControllable'
import { useColorVars } from '@/utils/style'

const props = {
  value: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
}

export type InputProps = ExtractPublicPropTypes<typeof props>

export const Input = defineComponent({
  name: 'ZInput',
  props,
  emits: {
    'update:value': (value: string) => true,
    change: (value: string) => true,
    input: (e: Event) => true,
    focus: (e: FocusEvent) => true,
    blur: (e: FocusEvent) => true,
  },
  slots: Object as SlotsType<{
    default?: () => VNode
    dropdown?: () => VNode
    prefix?: () => VNode
    suffix?: () => VNode
  }>,
  setup(props, { slots, emit }) {
    const [val, setVal] = useControllable(
      () => props.value,
      val => {
        emit('update:value', val)
        emit('change', val)
      },
      ''
    )

    const focused = ref(false)

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      setVal(el.value)
      emit('input', e)
    }
    const onFocus = (e: FocusEvent) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        focused.value = true
        emit('focus', e)
      }
    }
    const onBlur = (e: FocusEvent) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        focused.value = false
        emit('blur', e)
      }
    }

    const cssVars = useColorVars('z-input', {
      ring: 'primary.500',
    })
    return () => (
      // <div
      //   style={cssVars.value}
      //   class={[
      //     'z-input inline-flex w-full rounded-md text-sm shadow-sm',
      //     props.disabled ? 'is-disabled cursor-not-allowed bg-gray-50 opacity-50' : '',
      //     focused.value && 'is-focused',
      //   ]}
      // >
      // {slots.before && (
      //   <span class="z-input_before inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3">
      //     {slots.before()}
      //   </span>
      // )}
      <div style={cssVars.value} class={['z-input', props.disabled && 'z-input--disable']}>
        {(slots.prefix || props.prefix) && (
          <span class="z-input_prefix">{slots.prefix?.() || props.prefix}</span>
        )}

        <input
          class="z-input_input"
          type="text"
          size="1"
          value={val.value}
          readonly={props.readonly}
          disabled={props.disabled}
          placeholder={props.placeholder}
          autocomplete="off"
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {(slots.suffix || props.suffix) && (
          <span class="z-input_suffix">{slots.suffix?.() || props.suffix}</span>
        )}
      </div>
      //  {slots.after && (
      //   <span class="z-input_after inline-flex items-center rounded-r-md border border-r-0 border-gray-300 bg-gray-50 px-3">
      //     {slots.after()}
      //   </span>
      // )}
      // </div>
    )
  },
})
