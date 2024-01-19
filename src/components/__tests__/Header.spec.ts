import { describe, it, expect } from 'vitest'
import Header from '../Header/HeaderComponent.vue'
import { mount } from '@vue/test-utils'

describe('Header', () => {
  it('Component Has tag img', () => {
    const wrapper = mount(Header)
    const imgElements = wrapper.findAll('img')
    expect(imgElements.length).toBeGreaterThan(0)
  })
})
