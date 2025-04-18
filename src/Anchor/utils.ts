import { type Ref, computed, onMounted, ref } from 'vue'
import { isClient, useScroll } from '@vueuse/core'
import type { IAnchorItem } from './types'

export function flattenItems(items: IAnchorItem[]) {
  const flatList: IAnchorItem[] = []
  function traverse(items: IAnchorItem[]) {
    for (const item of items) {
      // 创建一个不包含 children 的对象副本
      flatList.push(item)
      // 如果存在子项，递归遍历子项
      if (item.children && item.children.length > 0) {
        traverse(item.children)
      }
    }
  }
  traverse(items)
  return flatList
}

export function useAnchor(
  headers: Ref<IAnchorItem[]>,
  options: { offset?: number; defaultValue?: string; container?: Ref<HTMLElement | undefined> } = {}
) {
  const { offset = 135, defaultValue = '' } = options
  const headerNodes = computed(() => {
    const items = flattenItems(headers.value)
    return items
      .map(item => {
        const el = document.getElementById(item.id)
        return {
          el,
          item,
        }
      })
      .filter(Boolean)
  })
  // const container = computed(() => toValue(options.container) || window)
  const current: Ref = ref('')

  function setActiveLink() {
    const activeIndex = headerNodes.value.findIndex(header => {
      return header.el ? header.el.getBoundingClientRect().top > offset : false
    })
    if (activeIndex == -1) {
      current.value = defaultValue || ''
    } else if (activeIndex == 0) {
      current.value = headerNodes.value[activeIndex]?.item.id
    } else {
      current.value = headerNodes.value[activeIndex - 1]?.item.id
    }
  }
  onMounted(() => {
    setActiveLink()
  })
  if (isClient) {
    useScroll(window, {
      onScroll: setActiveLink,
      throttle: 300,
    })
  }
  return { current, headers }
}
