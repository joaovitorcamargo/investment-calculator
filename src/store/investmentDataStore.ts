import { defineStore } from "pinia";

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
        calculateTotal() {
            return `R$ ${(this.initialInvestment + this.monthInvestment).toFixed(2).replace('.',',')}`;
        },
    },
    getters: {
        monthsStayed(state) {
            return state.stayInvestment < 2 ? `${state.stayInvestment} mes` :  `${state.stayInvestment} meses`
        }
    },
});