<script setup lang="ts">
import type { ClassValue } from 'kotl'
import { CheckIcon } from 'lucide-vue-next'
import type { AcceptableValue } from 'reka-ui'
import { SelectItem, SelectItemIndicator, SelectItemText } from 'reka-ui'
import { cn } from '@/lib/utils'

export type SelectItemProps = {
  /** The value given as data when submitted with a `name`. */
  value: AcceptableValue
  /** When `true`, prevents the user from interacting with the item. */
  disabled?: boolean
  /**
   * Optional text used for typeahead purposes.
   *
   * By default the typeahead behavior will use the `.textContent` of the `SelectItemText` part.
   *
   * Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string
}

const props = defineProps<SelectItemProps & { class?: ClassValue }>()
</script>

<template>
  <SelectItem
    data-slot="select-item"
    :value="props.value"
    :disabled="props.disabled"
    :text-value="props.textValue"
    :class="
      cn(
        'focus:bg-accent focus:text-accent-foreground [&_svg:not([class*=text-])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
        props.class
      )
    "
  >
    <SelectItemText class="flex shrink-0 items-center">
      <slot>
        {{ props.textValue || props.value }}
      </slot>
    </SelectItemText>
    <SelectItemIndicator class="absolute right-2 flex size-4 items-center justify-center">
      <CheckIcon class="text-muted-foreground pointer-events-none size-4 shrink-0" />
    </SelectItemIndicator>
  </SelectItem>
</template>
