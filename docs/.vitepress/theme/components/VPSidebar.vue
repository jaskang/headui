<script lang="ts" setup>
import { Anchor } from 'tailv'

import { useData } from 'vitepress'
import { computed } from 'vue'
import { isActive, useCloseSidebarOnEscape, useSidebar } from '../composables/defaultTheme'

const { sidebarGroups, hasSidebar } = useSidebar()
console.log('sidebarGroups', sidebarGroups.value)
const groups = computed(() => {
  return sidebarGroups.value.map(group => ({
    label: group.text,
    type: 'group',
    children: group.items.map(item => ({
      key: item.link,
      label: item.title,
      link: item.link,
    })),
  }))
})
console.log('groups', groups.value)
const { page, hash } = useData()

const matchItems = (items: any[]) => {
  console.log('items', page.value.relativePath, items)
  return items.findIndex(item => isActive(page.value.relativePath, item.link))
}
const current = computed(() => {
  for (const group of sidebarGroups.value) {
    const index = matchItems(group.items)
    if (index !== -1) {
      console.log('matchItems', group.text, index)
      return { group: group.text, index }
    }
  }
  return { group: '', index: -1 }
})

const items = [
  {
    label: '基础',
    type: 'group',
    children: [
      {
        key: '/components/button',
        label: 'Button',
        link: '/components/button',
        children: [
          { key: '/components/button/button', label: 'Button', link: '/components/button/button' },
          { key: '/components/button/button-group', label: 'ButtonGroup', link: '/components/button/button-group' },
        ],
      },
      { key: '/components/anchor', label: 'Anchor', link: '/components/anchor' },
      { key: '/components/scroll-area', label: 'ScrollArea', link: '/components/scroll-area' },
    ],
  },
  {
    label: '表单',
    type: 'group',
    children: [
      { key: '/components/checkbox', label: 'Checkbox', link: '/components/checkbox' },
      { key: '/components/radio', label: 'Radio', link: '/components/radio' },
      { key: '/components/input', label: 'Input', link: '/components/input' },
      { key: '/components/textarea', label: 'Textarea', link: '/components/textarea' },
      { key: '/components/select', label: 'Select', link: '/components/select' },
      { key: '/components/switch', label: 'Switch', link: '/components/switch' },
    ],
  },
  {
    label: '展示',
    type: 'group',
    children: [
      { key: '/components/menu', label: 'Menu', link: '/components/menu' },
      { key: '/components/tab', label: 'Tab', link: '/components/tab' },
      { key: '/components/avatar', label: 'Avatar', link: '/components/avatar' },
      { key: '/components/badge', label: 'Badge', link: '/components/badge' },
      { key: '/components/list-box', label: 'ListBox', link: '/components/list-box' },
    ],
  },
  {
    label: '反馈',
    type: 'group',
    children: [
      { key: '/components/popover', label: 'Popover', link: '/components/popover' },
      { key: '/components/tooltip', label: 'Tooltip', link: '/components/tooltip' },
    ],
  },
]
</script>

<template>
  <HSidebar :options="items" />
</template>
