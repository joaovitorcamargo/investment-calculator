import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { investmentDataStore } from '../../../../store/investmentDataStore'
import { mount } from '@vue/test-utils'

let store: any
let wrapper: any

describe('TotalInvestment', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    store = investmentDataStore()
    wrapper = mount(
      {
        data() {
          return {
            initialInvestment: 0,
            monthInvestment: 0,
            stayInvestment: 0
          }
        },
        watch: {
          initialInvestment(value: number) {
            store.initialInvestment = value
          },
          monthInvestment(value: number) {
            store.monthInvestment = value
          },
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
  })

  it('set value with arca investment', async () => {
    await wrapper.setData({ initialInvestment: 1000, monthInvestment: 100, stayInvestment: 24 })
    expect(store.calculateTotalArca()).toEqual(store.getTotal().totalArca)
  })

  it('set value with selic investment', async () => {
    await wrapper.setData({ initialInvestment: 1000, monthInvestment: 100, stayInvestment: 24 })
    expect(store.calculateTotalSelic()).toEqual(store.getTotal().totalSelic)
  })
})
