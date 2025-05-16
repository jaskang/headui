export type ISidebarItem = {
  label: string
  link?: string
  icon?: any
  type?: 'group' | 'item'
  children?: ISidebarItem[]
}
