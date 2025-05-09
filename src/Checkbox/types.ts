import type { InputValue } from '@/utils/theme'
import { type InjectionKey, type ModelRef } from 'vue'

export const CheckboxGroupInjectKey: InjectionKey<{
  value: ModelRef<InputValue[]>
  update: (val: InputValue, checked: boolean) => void
}> = Symbol('CheckboxGroupInjectKey')
