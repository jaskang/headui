import { clsx } from 'kotl'
import type { ThemeColor, ThemeVariant } from './theme'

export function createVariantClass(type: ThemeVariant, color: string) {
  return clsx([
    {
      solid: `variant-solid`,
      soft: `variant-soft`,
      default: '',
      outline: 'variant-outline',
      pure: 'variant-pure',
      text: 'variant-text',
    }[type],
  ])
}
