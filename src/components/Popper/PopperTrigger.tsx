import { useEventListener } from '@vueuse/core'
import { isObject } from 'kotl'
import {
  Fragment,
  type InjectionKey,
  type Ref,
  type VNode,
  cloneVNode,
  defineComponent,
  h,
  inject,
  withDirectives,
} from 'vue'
import { useClickOutside } from '@/hooks/useClickOutside'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export type UsePopperTriggerOptions = {
  referenceEl: Ref<HTMLElement | undefined>
  floatingEl: Ref<HTMLElement | undefined>
  trigger: Ref<TriggerType>
  open: Ref<boolean>
}

export const POPPER_TRIGGER_TOKEN: InjectionKey<Ref> = Symbol('popper-trigger')

export function getFirstChild(nodes: VNode[]): VNode | null {
  for (const child of nodes) {
    if (isObject(child)) {
      if (child.type === Comment) {
        continue
      }
      if (child.type === 'svg' || child.type === Text) {
        return h('span', child)
      }
      if (child.type === Fragment) {
        return getFirstChild(child.children as VNode[])
      }
      return child
    }
    return h('span', child)
  }

  return null
}

// https://github.com/DevCloudFE/vue-devui/blob/dev/packages/devui-vue/devui/shared/components/popper-trigger/src/use-popper-trigger.ts
export default defineComponent({
  name: 'TPopperTrigger',
  setup(_, { slots, attrs }) {
    return () => {
      const defaultSlot = slots.default?.(attrs)
      const triggerRef = inject(POPPER_TRIGGER_TOKEN) as Ref<HTMLElement | null>

      if (!defaultSlot) {
        return null
      }

      const firstChild = getFirstChild(defaultSlot)

      if (!firstChild) {
        return null
      }

      return withDirectives(cloneVNode(firstChild, attrs), [
        [
          {
            mounted(el) {
              triggerRef.value = el
            },
            updated(el) {
              triggerRef.value = el
            },
            unmounted() {
              triggerRef.value = null
            },
          },
        ],
      ])
    }
  },
})

export function usePopperTrigger(
  { referenceEl, floatingEl, trigger, open }: UsePopperTriggerOptions,
  change: (value: boolean, event: string) => void
) {
  let timer: ReturnType<typeof setTimeout>
  const handleTriggerEnter = () => {
    // if (props.disabled) return
    if (trigger.value === 'hover') {
      clearTimeout(timer)
      timer = setTimeout(() => {
        change(true, 'mouseenter')
      }, 200)
    }
  }
  function handleTriggerLeave() {
    // if (props.disabled) return
    if (trigger.value === 'hover') {
      clearTimeout(timer)
      timer = setTimeout(() => {
        change(false, 'mouseleave')
      }, 200)
    }
  }
  function handleTriggerClick() {
    // if (props.disabled) return
    if (trigger.value === 'click') change(!open.value, 'click')
  }
  function handleTriggerFocus() {
    // if (props.disabled) return
    if (trigger.value === 'focus') change(true, 'focus')
  }
  function handleTriggerBlur() {
    // if (props.disabled) return
    if (trigger.value === 'focus') change(false, 'blur')
  }
  function handleClickOutside() {
    // if (props.disabled) return
    if (trigger.value !== 'manual' && open.value) change(false, 'clickOutside')
  }

  useEventListener(referenceEl, 'mouseenter', handleTriggerEnter)
  useEventListener(referenceEl, 'mouseleave', handleTriggerLeave)
  useEventListener(referenceEl, 'click', handleTriggerClick)
  useEventListener(referenceEl, 'focus', handleTriggerFocus)
  useEventListener(referenceEl, 'blur', handleTriggerBlur)
  useEventListener(floatingEl, 'mouseenter', handleTriggerEnter)
  useEventListener(floatingEl, 'mouseleave', handleTriggerLeave)
  useClickOutside([floatingEl, referenceEl], handleClickOutside)
}
