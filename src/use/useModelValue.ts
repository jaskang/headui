import { isUndefined } from 'kotl'
import { computed, ref, type UnwrapRef, getCurrentInstance, type ModelRef } from 'vue'

export interface UseModelValueOptions<T> {
  defaultValue?: T
  emits?: string | string[]
  onChange?: (val: T) => void
}

export function useModelValue<T>(model: ModelRef<T>, options: UseModelValueOptions<T> = {}) {
  const innerValue = ref(model.value ?? options.defaultValue)
  const ctx = getCurrentInstance()
  const value = computed({
    get: () => {
      if (isUndefined(model.value)) {
        console.log('get innerValue', innerValue.value)
        return innerValue.value
      }
      console.log('get model.value', model.value)
      return model.value
    },
    set: (val: T) => {
      model.value = val
      innerValue.value = val
      if (options.emits) {
        if (Array.isArray(options.emits)) {
          options.emits.forEach(emit => {
            ctx?.emit(emit, val)
          })
        } else {
          ctx?.emit(options.emits, val)
        }
      }
      options.onChange?.(val)
    },
  })

  return value
}
