<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import Slider from 'primevue/slider';
import {investmentDataStore} from '../../../store/investmentDataStore'

const store = investmentDataStore();

const initialInvestment = ref(0 as number);
const monthInvestment = ref(0 as number);
const stayInvestment = ref(1 as number);

const labelStayInvestment = computed(() => {
  return stayInvestment.value < 2 ? `${stayInvestment.value} Mes` :  `${stayInvestment.value} Meses`
})

const labelMonthInvestment = computed(() => {
  return `R$ ${monthInvestment.value.toFixed(2).replace('.',',')}`
})

const labelInitialinvestment = computed(() => {
  return `R$ ${initialInvestment.value.toFixed(2).replace('.',',')}`
})

watch(initialInvestment, (value: number) => {
  store.initialInvestment = value
})

watch(monthInvestment, (value: number) => {
  store.monthInvestment = value
})

watch(stayInvestment, (value: number) => {
  store.stayInvestment = value
})

</script>

<template>
  <div class="formInvestment flex flex-column gap-8 w-full">
    <div class="investmentData flex flex-column align-items-center gap-4">
      <h5 class="align-self-start">Quanto gostaria de investir?</h5>
      <Slider v-model="initialInvestment" class="w-full" :min="0" :max="5000" :step="100"/>
      <span> {{ labelInitialinvestment }} </span>
    </div>
    <div class="investmentData flex flex-column align-items-center gap-4">
      <h5 class="align-self-start">Por mês, quanto investiria?</h5>
      <Slider v-model="monthInvestment" class="w-full" :min="0" :max="5000" :step="100"/>
      <span> {{ labelMonthInvestment }} </span>
    </div>
    <div class="investmentData flex flex-column align-items-center gap-4">
      <h5 class="align-self-start">Quanto tempo deixaria seu dinheiro investido?</h5>
      <Slider v-model="stayInvestment" class="w-full" :min="1" :max="48"/>
      <span> {{ labelStayInvestment }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .formInvestment {
    .investmentData {
      h5 {
        font-weight: 600;
        font-size: 1.5rem;
      }
      span {
        font-weight: bold;
        font-size: 2.5rem;
      }
    }
  }

@media (max-width: 800px) {
  .formInvestment {
    .investmentData {
      h5 {
        font-size: 1.4rem;
      }
      span {
        font-size: 2rem;
      }
    }
  }
}
</style>