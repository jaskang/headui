<script setup lang="ts">
import { useData } from 'vitepress'
import VPNotFound from './VPNotFound.vue'
import { useSidebar } from '../composables/defaultTheme'
import VPDoc from './VPDoc.vue'
import VPHome from './VPHome.vue'
import VPPage from './VPPage.vue'

const { page, frontmatter } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
  <div
    class="VPContent"
    id="VPContent"
    :class="{
      'has-sidebar': hasSidebar,
      'is-home': frontmatter.layout === 'home',
    }"
  >
    <slot name="not-found" v-if="page.isNotFound"><NotFound /></slot>

    <VPPage v-else-if="frontmatter.layout === 'page'">
      <template #page-top><slot name="page-top" /></template>
      <template #page-bottom><slot name="page-bottom" /></template>
    </VPPage>

    <VPHome v-else-if="frontmatter.layout === 'home'">
      <template #home-hero-before><slot name="home-hero-before" /></template>
      <template #home-hero-info-before><slot name="home-hero-info-before" /></template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after><slot name="home-hero-info-after" /></template>
      <template #home-hero-actions-after><slot name="home-hero-actions-after" /></template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>
    </VPHome>

    <component v-else-if="frontmatter.layout && frontmatter.layout !== 'doc'" :is="frontmatter.layout" />

    <VPDoc v-else>
      <template #doc-top><slot name="doc-top" /></template>
      <template #doc-bottom><slot name="doc-bottom" /></template>

      <template #doc-footer-before><slot name="doc-footer-before" /></template>
      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
    </VPDoc>
  </div>
</template>
