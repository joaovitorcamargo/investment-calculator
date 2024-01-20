<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import {investmentDataStore} from '../../../store/investmentDataStore'
import formatResult from '@/helpers/formatResult';
import SliderInputComponent from '../../../components/SliderInput/SliderInputComponent.vue'

const store = investmentDataStore();

const initialInvestment = ref(100 as number);
const monthInvestment = ref(100 as number);
const stayInvestment = ref(12 as number);
const labelStayInvestment = computed(() => {
  return stayInvestment.value < 2 ? `${stayInvestment.value} Mes` :  `${stayInvestment.value} Meses`
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
  <div class="formInvestment flex flex-col gap-8">
    <div class="investmentData flex flex-col items-center gap-4">
      <h5 class="self-start">Quanto gostaria de investir?</h5>
      <SliderInputComponent
        id="initialInvestment"
        class="w-full"
        min="100"
        max="5000"
        step="100"
        v-model="initialInvestment"/>
      <span> {{ formatResult(initialInvestment) }} </span>
    </div>
    <div class="investmentData flex flex-col items-center gap-4">
      <h5 class="self-start">Por mês, quanto investiria?</h5>
      <SliderInputComponent
        id="monthInvestment"
        class="w-full"
        min="100"
        max="5000"
        step="100"
        v-model="monthInvestment"/>
      <span> {{ formatResult(monthInvestment) }} </span>
    </div>
    <div class="investmentData flex flex-col items-center gap-4">
      <h5 class="self-start">Quanto tempo deixaria seu dinheiro investido?</h5>
      <SliderInputComponent
        id="stayInvestment"
        class="w-full"
        min="12"
        max="120"
        v-model="stayInvestment"/>
      <span> {{ labelStayInvestment }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .formInvestment {
    .investmentData {
      color: #222222;
      h5 {
        font-weight: 600;
        font-size: 2rem;
      }
      span {
        font-weight: bold;
        font-size: 3rem;
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