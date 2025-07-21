import { type ClassValue, clsx } from 'kotl'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type OverrideClass<T extends Record<string, any>> = T & {
  class?: ClassValue
}

export type ThemeSize = 'sm' | 'default' | 'lg'
