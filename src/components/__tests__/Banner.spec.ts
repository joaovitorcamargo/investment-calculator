import { describe, it, expect } from 'vitest'
import Banner from '../Banner/BannerComponent.vue'
import { mount } from '@vue/test-utils'

describe('Banner', () => {
  it('should render the investment simulator text', () => {
    const wrapper = mount(Banner)
    expect(wrapper.text()).toContain('Simulador de investimento')
  })

  it('should render the savings discovery text', () => {
    const wrapper = mount(Banner)
    expect(wrapper.text()).toContain('Descubra o quanto você pode economizar.')
  })
})
