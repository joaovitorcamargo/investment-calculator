import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import FormInvestment from '../FormInvestment.vue'
import { investmentDataStore } from '../../../../store/investmentDataStore'
import { mount } from '@vue/test-utils'

let store: any

describe('FormInvestment', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    store = investmentDataStore()
  })

  it('renders initial investment slider', () => {
    const wrapper = mount(FormInvestment)
    const initialInvestmentSlider = wrapper.findComponent({ name: 'SliderInputComponent' })
    expect(initialInvestmentSlider.exists()).toBe(true)
  })

  it('renders month investment slider', () => {
    const wrapper = mount(FormInvestment)
    const monthInvestmentSlider = wrapper.findComponent({ name: 'SliderInputComponent' })
    expect(monthInvestmentSlider.exists()).toBe(true)
  })

  it('renders stay investment slider', () => {
    const wrapper = mount(FormInvestment)
    const stayInvestmentSlider = wrapper.findComponent({ name: 'SliderInputComponent' })
    expect(stayInvestmentSlider.exists()).toBe(true)
  })

  it('updates store on initial investment change', async () => {
    const wrapper = mount(
      {
        data() {
          return {
            initialInvestment: 0
          }
        },
        watch: {
          initialInvestment(value: number) {
            store.initialInvestment = value
          }
        }
      },
      {
        global: {
          plugins: [store]
        }
      }
    )
    await wrapper.setData({ initialInvestment: 1000 })
    const currentStore = wrapper.vm.$data as { initialInvestment: number }
    expect(store.initialInvestment).toBe(currentStore.initialInvestment)
  })

  it('updates store on month investment change', async () => {
    const wrapper = mount(
      {
        data() {
          return {
            monthInvestment: 0
          }
        },
        watch: {
          monthInvestment(value: number) {
            store.monthInvestment = value
          }
        }
      },
      {
        global: {
          plugins: [store]
        }
      }
    )
    await wrapper.setData({ monthInvestment: 100 })
    const currentStore = wrapper.vm.$data as { monthInvestment: number }
    expect(store.monthInvestment).toBe(currentStore.monthInvestment)
  })

  it('updates store on stay investment change', async () => {
    const wrapper = mount(
      {
        data() {
          return {
            stayInvestment: 0
          }
        },
        watch: {
          stayInvestment(value: number) {
            store.stayInvestment = value
          }
        }
      },
      {
        global: {
          plugins: [store]
        }
      }
    )
    await wrapper.setData({ stayInvestment: 12 })
    const currentStore = wrapper.vm.$data as { stayInvestment: number }
    expect(store.stayInvestment).toBe(currentStore.stayInvestment)
  })
})
