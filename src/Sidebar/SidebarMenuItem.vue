<script setup lang="ts">
import { ChevronRightIcon } from 'lucide-vue-next'
import { CollapsibleContent, CollapsibleRoot, CollapsibleTrigger } from 'reka-ui'
import { computed } from 'vue'
import SidebarMenu from './SidebarMenu.vue'
import SidebarMenuButton from './SidebarMenuButton.vue'
import type { ISidebarItem } from './types'

defineOptions({ name: 'HSidebarMenuItem' })

const props = defineProps<{
  item: ISidebarItem
}>()

const hasChildren = computed(() => props.item.children && props.item.children.length > 0)
</script>

<template>
  <CollapsibleRoot as="li" data-slot="sidebar-menu-item" data-sidebar="menu-item" class="group/menu-item relative">
    <CollapsibleTrigger as-child>
      <SidebarMenuButton>
        <span>{{ item.label }}</span>
        <ChevronRightIcon
          v-if="hasChildren"
          class="ml-auto transition-transform duration-200 group-data-[state=open]/menu-item:rotate-90"
        />
      </SidebarMenuButton>
    </CollapsibleTrigger>
    <CollapsibleContent
      class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up overflow-hidden"
    >
      <SidebarMenu v-if="hasChildren" :options="item.children!" />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
<!-- 
2020-01-17 13:12:25 3602184501001941690 活期 00000 人民币 钞 网转 3602 +3,250.00 83,010.32 陈心俊 6222083602017539062 网上银行
2020-01-17 13:12:57 3602184501001941690 活期 00000 人民币 钞 网转 3602 +1,945.00 84,955.32 陈心俊 6222083602017539062 网上银行
2020-04-14 22:14:31 3602184501001941690 活期 00000 人民币 钞 网转 3602 +9,250.00 35,230.31 陈心俊 6222083602017539062 网上银行
2020-07-02 20:09:46 3602184501001941690 活期 00000 人民币 钞 网转 3602 +30,000.00 67,744.16 陈心俊 6222083602017539062 网上银行
2020-07-03 17:01:27 3602184501001941690 活期 00000 人民币 钞 网转 3602 +22,450.00 89,694.16 陈心俊 6222083602017539062 网上银行
2020-08-07 18:50:28 3602184501001941690 活期 00000 人民币 钞 网转 3602 +2,500.00 23,551.93 陈心俊 6222083602017539062 网上银行
2020-08-27 16:30:21 3602184501001941690 活期 00000 人民币 钞 网转 3602 +5,800.00 24,128.06 陈心俊 6222083602017539062 网上银行
2020-10-13 15:05:16 3602184501001941690 活期 00000 人民币 钞 网转 3602 +12,400.00 28,211.92 陈心俊 6222083602017539062 网上银行
2020-11-28 14:48:12 3602184501001941690 活期 00000 人民币 钞 网转 3602 +6,250.00 17,809.02 陈心俊 6222083602017539062 网上银行
2020-12-28 13:00:35 3602184501001941690 活期 00000 人民币 钞 网转 3602 +8,300.00 28,827.42 陈锦荣 6222083602000265329 网上银行
-->
<!-- 
2020-01-17 3,250.00 陈心俊 6222083602017539062 网上银行 2020-01-17 1,945.00 陈心俊 6222083602017539062 网上银行
2020-04-14 9,250.00 陈心俊 6222083602017539062 网上银行 2020-07-02 30,000.00 陈心俊 6222083602017539062 网上银行
2020-07-03 22,450.00 陈心俊 6222083602017539062 网上银行 2020-08-07 2,500.00 陈心俊 6222083602017539062 网上银行
2020-08-27 5,800.00 陈心俊 6222083602017539062 网上银行 2020-10-13 12,400.00 陈心俊 6222083602017539062 网上银行
2020-11-28 6,250.00 陈心俊 6222083602017539062 网上银行 2020-12-28 8,300.00 陈锦荣 6222083602000265329 网上银行 -->
