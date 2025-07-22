<script setup lang="ts">
import type { ClassValue } from 'kotl'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

export type AvatarProps = {
  src?: string
  fallback?: string
}

defineOptions({ name: 'Avatar' })
const props = defineProps<AvatarProps & { class?: ClassValue }>()
</script>
<template>
  <AvatarRoot
    data-slot="avatar-root"
    :class="cn(['relative flex size-8 shrink-0 overflow-hidden rounded-full', props.class])"
  >
    <AvatarImage data-slot="avatar-image" class="aspect-square size-full" :src="props.src" />
    <AvatarFallback
      data-slot="avatar-fallback"
      class="bg-muted flex size-full items-center justify-center rounded-full"
      :delay-ms="600"
    >
      {{ props.fallback }}
    </AvatarFallback>
  </AvatarRoot>
</template>
