import type { InputValue } from '@/utils/theme'
import { type InjectionKey, type ComputedRef } from 'vue'

export const CheckboxGroupInjectKey: InjectionKey<{
  value: ComputedRef<InputValue[]>
  update: (val: InputValue, checked: boolean) => void
}> = Symbol('CheckboxGroupInjectKey')
