import { describe, it, expect } from 'vitest'
import Slider from '../SliderInput/SliderInputComponent.vue'
import { mount } from '@vue/test-utils'

describe('Slider', () => {
  it('has slider input', () => {
    const wrapper = mount(Slider)
    expect(wrapper.classes('slider')).toBe(true)
  })
})
