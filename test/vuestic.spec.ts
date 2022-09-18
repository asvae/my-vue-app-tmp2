import { expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import VueExample from '../src/components/VueExample.vue'
import { createVuesticEssential, GlobalConfigPlugin } from 'vuestic-ui'

console.log('createVuestic', createVuesticEssential)

test('mounts a component', () => {
  const wrapper = mount(VueExample, {
    global: {
      plugins: [createVuesticEssential(), GlobalConfigPlugin()]
    }
  })

  expect(wrapper.text()).toContain('Banana')
})
