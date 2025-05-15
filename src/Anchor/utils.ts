import { isClient, useScroll } from '@vueuse/core'
import { computed, onMounted, type Ref, ref } from 'vue'
import type { IAnchorItem } from './types'

export function flattenItems(items: IAnchorItem[]): IAnchorItem[] {
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
