import {
  computed,
  inject,
  type InjectionKey,
  onMounted,
  provide,
  reactive,
  ref,
  toValue,
  type Ref,
  type StyleValue,
} from 'vue'
import {
  useFloating,
  offset,
  flip,
  shift,
  size,
  type VirtualElement,
  arrow,
  autoUpdate,
  type Placement,
  type SizeOptions,
  type Middleware,
} from '@floating-ui/vue'
import { uid } from 'kotl'
import { onClickOutside, useEventListener } from '@vueuse/core'
import { useHoverListener, useFocusListener, useClickListener } from '../../use/useTargetEvent'

export type PopperPlacement = Placement
export type PopperVirtualElement = VirtualElement
export type PopperSizer = SizeOptions['apply']

export type PopperContext = {
  nodeId: string
  parent: string
  open: boolean
  onOpenChange(open: boolean, event?: Event): void
}

export type PopperTreeContext = {
  nodeId: string
  addNode: (node: PopperNode) => void
  removeNode: (nodeId: string) => void
}
export type PopperNode = {
  nodeId: string
  open: boolean
}

export type PopperTrigger = 'click' | 'hover' | 'focus' | 'manual'

const POPPER_TREE_CONTEXT_KEY = Symbol('popper-tree') as InjectionKey<PopperTreeContext>

export function usePopperTree(nodeId: string) {
  const children = ref<PopperNode[]>([])
  const addNode = (node: PopperNode) => {
    children.value.push(node)
  }
  const removeNode = (nodeId: string) => {
    children.value = children.value.filter(n => n.nodeId !== nodeId)
  }
  const hasChildrenOpen = computed(() => children.value.some(n => n.open))
  provide(POPPER_TREE_CONTEXT_KEY, {
    nodeId,
    addNode,
    removeNode,
  })
  return {
    children,
    hasChildrenOpen,
  }
}

export function useClick(options: { reference: Ref<HTMLElement | undefined>; floating: Ref<HTMLElement | undefined> }) {
  onMounted(() => {
    useEventListener(options.reference, 'click', e => {})
  })
}

function refElement(el: Ref<HTMLElement | VirtualElement | undefined>) {
  return computed(() => {
    const e = toValue(el)
    if (e && 'nodeType' in e) {
      return e
    }
    return undefined
  })
}

export function usePopper({
  open,
  reference,
  floating,
  floatingArrow,
  placement,
  trigger,
  sizer,
  onChange,
}: {
  open: Ref<boolean>
  reference: Ref<HTMLElement | PopperVirtualElement | undefined>
  floating: Ref<HTMLElement | undefined>
  floatingArrow: Ref<HTMLElement | undefined>
  placement: Ref<PopperPlacement>
  trigger: Ref<PopperTrigger[]>
  sizer: PopperSizer
  onChange: (val: boolean, trigger: PopperTrigger) => void
}) {
  const nodeId = `popper-${uid(6)}`
  const parent = inject(POPPER_TREE_CONTEXT_KEY, null)
  const { hasChildrenOpen } = usePopperTree(nodeId)

  const floatingReturn = useFloating(reference, floating, {
    placement,
    middleware: [
      offset(8),
      sizer ? size({ apply: sizer }) : undefined,
      flip(),
      shift(),
      arrow({ element: floatingArrow }),
    ].filter(Boolean) as Middleware[],
    whileElementsMounted: autoUpdate,
  })

  const arrowStyle = computed(() => {
    const { placement, middlewareData } = floatingReturn
    const side = placement.value.split('-')[0] as 'bottom' | 'left' | 'top' | 'right'
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[side]

    return {
      position: 'absolute',
      left: middlewareData.value.arrow?.x != null ? `${middlewareData.value.arrow.x}px` : '',
      top: middlewareData.value.arrow?.y != null ? `${middlewareData.value.arrow.y}px` : '',
      [staticSide]: '-8px',
    } as StyleValue
  })

  const emitChange = (val: boolean, trigger: PopperTrigger) => {
    if (val !== open.value) {
      // true 直接设置，false 需判断子级 popper 已关闭
      if (val || !hasChildrenOpen.value) {
        onChange(val, trigger)
      }
    }
  }

  //
  if (trigger.value.includes('hover')) {
    const referenceHover = ref(false)
    const floatingHover = ref(false)
    const emitHover = () => {
      const hovered = referenceHover.value || floatingHover.value
      // 鼠标不在 reference 和 floating 上
      emitChange(hovered, 'hover')
    }
    useHoverListener(refElement(reference), { delayLeave: 100 }, val => {
      referenceHover.value = val
      emitHover()
    })
    useHoverListener(refElement(floating), { delayLeave: 100 }, val => {
      floatingHover.value = val
      emitHover()
    })
  }

  if (trigger.value.includes('focus')) {
    useFocusListener(refElement(reference), val => {
      emitChange(val, 'focus')
    })
    onClickOutside(
      floating,
      e => {
        console.log(e, 'onClickOutside')
        emitChange(false, 'click')
      },
      { ignore: [refElement(reference)] }
    )
  }
  if (trigger.value.includes('click')) {
    useClickListener(refElement(reference), () => {
      emitChange(!open.value, 'click')
    })
    onClickOutside(
      floating,
      e => {
        console.log(e, 'onClickOutside')
        emitChange(false, 'click')
      },
      { ignore: [refElement(reference)] }
    )
  }

  //

  parent?.addNode(reactive({ nodeId, open }))
  onMounted(() => {
    parent?.removeNode(nodeId)
  })
  return {
    open,
    nodeId,
    arrowStyle,
    ...floatingReturn,
  }
}
