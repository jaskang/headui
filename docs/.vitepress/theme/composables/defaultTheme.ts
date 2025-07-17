import { useData } from 'vitepress'
import { getSidebar, getSidebarGroups } from 'vitepress/dist/client/theme-default/support/sidebar.js'
import { computed, shallowReadonly, shallowRef, watch } from 'vue'

export { usePrevNext } from 'vitepress/dist/client/theme-default/composables/prev-next.js'
export { isActive } from 'vitepress/dist/client/shared.js'

function useSidebar() {
  const sidebar = shallowRef<any[]>([])
  const { page, theme } = useData()
  watch(
    () => [page.value.relativePath, theme.value.sidebar],
    ([relativePath, sidebarConfig]) => {
      const newSidebar = sidebarConfig ? getSidebar(sidebarConfig, relativePath) : []
      if (JSON.stringify(newSidebar) !== JSON.stringify(sidebar.value)) {
        sidebar.value = newSidebar
      }
    },
    { immediate: true, deep: true, flush: 'sync' }
  )
  return {
    sidebar,
  }
}

export function useLayout() {
  const { frontmatter, theme } = useData()
  const { sidebar } = useSidebar()
  const isHome = computed(() => {
    return !!(frontmatter.value.isHome ?? frontmatter.value.layout === 'home')
  })
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && !isHome.value
  })
  // const isSidebarEnabled = computed(() => hasSidebar.value && is960.value)
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : []
  })
  const hasAside = computed(() => {
    if (isHome.value) return false
    if (frontmatter.value.aside != null) return !!frontmatter.value.aside
    return theme.value.aside !== false
  })
  const leftAside = computed(() => {
    if (!hasAside.value) return false
    return frontmatter.value.aside == null ? theme.value.aside === 'left' : frontmatter.value.aside === 'left'
  })
  // const hasLocalNav = computed(() => {
  //   return headers.value.length > 0
  // })
  return {
    isHome,
    sidebar: shallowReadonly(sidebar),
    sidebarGroups,
    hasSidebar,
    // isSidebarEnabled,
    hasAside,
    leftAside,
    // headers: shallowReadonly(headers),
    // hasLocalNav,
  }
}
