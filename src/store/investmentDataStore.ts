import { defineStore } from 'pinia'
import calculateTotalInvestment from '../helpers/calculateTotalInvestment'

export const investmentDataStore = defineStore('investmentDataStore', {
  state: () => {
    return {
      initialInvestment: 0 as number,
      monthInvestment: 0 as number,
      stayInvestment: 1 as number,
      total: 0 as number
    }
  },
  actions: {
    calculateTotalArca() {
      return this.getTotal().totalArca
    },
    calculateTotalSelic() {
      return this.getTotal().totalSelic
    },
    getTotal() {
      const getTax = calculateTotalInvestment(
        this.initialInvestment,
        this.monthInvestment,
        this.stayInvestment
      )
      return getTax
    }
  },
  getters: {
    monthsStayed(state) {
      return state.stayInvestment < 2
        ? `${state.stayInvestment} mes`
        : `${state.stayInvestment} meses`
    }
  }
})
