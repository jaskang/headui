import type { InjectionKey, ModelRef, Ref } from 'vue'
import type { InputValue } from '@/utils/theme'

export const RadioGroupInjectKey: InjectionKey<{
  size: Ref<'sm' | 'md' | 'lg'>
  model: ModelRef<InputValue | undefined>
  select: (val: InputValue) => void
}> = Symbol('RadioGroupInjectKey')
