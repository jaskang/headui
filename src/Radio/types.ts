import type { InputValue } from '@/utils/theme'
import type { InjectionKey, ComputedRef, Ref } from 'vue'

export const RadioGroupInjectKey: InjectionKey<{
  size: Ref<'sm' | 'md' | 'lg'>
  value: ComputedRef<InputValue>
  select: (val: InputValue) => void
}> = Symbol('RadioGroupInjectKey')
