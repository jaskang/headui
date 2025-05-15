import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { defineComponent, ref } from 'vue'
import { PrimitiveSlot } from '../index'

describe('PrimitiveSlot', () => {
  test('slot ref element', async () => {
    const slotRef = ref()
    const wrapper = mount(
      defineComponent({
        template: '<PrimitiveSlot ref="slotRef" class="text-green"><span class="bg-red">test</span></PrimitiveSlot>',
        components: { PrimitiveSlot },
        setup() {
          return { slotRef }
        },
      }),
      {}
    )
    expect(slotRef.value.$el.tagName).toBe('SPAN')
    expect(wrapper.html()).toBe('<span class="text-green bg-red">test</span>')
  })
})
