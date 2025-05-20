export type ISidebarItem = {
  label: string
  link?: string
  icon?: any
  children?: ISidebarItem[]
}

export type ISidebarGroup = {
  label: string
  type: 'group'
  children: ISidebarItem[]
}

export function isSidebarGroup(item: ISidebarItem | ISidebarGroup): item is ISidebarGroup {
  return 'type' in item && item.type === 'group'
}
