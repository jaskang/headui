import { type Ref, computed, onMounted, ref } from 'vue'
import { isClient, useScroll } from '@vueuse/core'
import type { IAnchorItem } from '../../../../src'
import { useRoute, useData, type Header } from 'vitepress'

type AnchorHeader = Header & {
  path: number[]
}

function convertHeadersToAnchor(headers: Header[]): IAnchorItem[] {
  return headers.map(header => ({
    id: header.slug,
    title: header.title,
    link: header.link,
    children: header.children ? convertHeadersToAnchor(header.children) : [],
  }))
}
function flattenHeaders(items: Header[]) {
  const flatList: AnchorHeader[] = []
  function traverse(items: Header[], parent: number[] = []) {
    for (const [index, item] of items.entries()) {
      const path = [...parent, index]
      // 创建一个不包含 children 的对象副本
      flatList.push({ ...item, path: path })
      // 如果存在子项，递归遍历子项
      if (item.children && item.children.length > 0) {
        traverse(item.children, path)
      }
    }
  }
  traverse(items)
  return flatList
}

export function useAnchor() {
  const route = useRoute()
  console.log('hash', route.hash)
  const { page } = useData()
  const current: Ref = ref([])
  const headers = computed(() => flattenHeaders(page.value.headers))
  const items = computed(() => convertHeadersToAnchor(headers.value))

  function updateCurrent() {
    const activeHeader = headers.value.find(header => {
      const el = document.getElementById(header.slug)
      if (el) {
        return el.getBoundingClientRect().top > 135
      }
      return false
    })
    if (activeHeader) {
      current.value = activeHeader.path
    }
  }
  onMounted(() => {
    updateCurrent()
    if (isClient) {
      useScroll(window, {
        onScroll: updateCurrent,
        throttle: 300,
      })
    }
  })
  return { current, items }
}
