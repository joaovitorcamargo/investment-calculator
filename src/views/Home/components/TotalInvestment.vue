<script setup lang="ts">
import { computed } from 'vue';
import {investmentDataStore} from '../../../store/investmentDataStore'
import formatResult from '@/helpers/formatResult';
const store = investmentDataStore(); 

const totalArca = computed(() => {
  return formatResult(store.calculateTotalArca());
})

const totalSelic = computed(() => {
  return formatResult(store.calculateTotalSelic());
})

</script>

<template>
  <div class="totalInvestment grid gap-2">
    <div class="flex flex-col w-full">
      <span class="label">Em {{ store.monthsStayed }} você terá com a ARCA</span>
      <h5>{{ totalArca }}</h5>
    </div>
    <hr class="align-self-start w-full">
    <div class="flex flex-col w-full">
      <span class="label-selic">Em {{ store.monthsStayed }} você terá com a SELIC</span>
      <h5 class="total-selic">{{ totalSelic }}</h5>
    </div>
    <div class="flex flex-col gap-3 w-full">
      <span class="taxInformation w-full">
        TAXA SELIC: <b>9,25%</b>
      </span>
      <span class="taxInformation w-full">
        RENTABILIDADE DO ARCA: <b>18% a.a.</b>
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .totalInvestment {
    h5 {
      font-weight: 600;
      font-size: 4rem;
    }
    .label {
      color:#2D2D2D;
      font-weight: 600;
      font-size: 2rem;
    }
    .label-selic {
      color: #949494;
      font-weight: 600;
      font-size: 1.3rem;
    }
    .total-selic{
      color: #949494;
      font-weight: 100;
      font-size: 3rem;
    }
    hr {
      border: 2px solid #54D4A0;
    }
    .taxInformation {
      border-radius: 1rem;
      padding: 2rem;
      background-color: #F6F6F6;
    }
  }

@media (max-width: 800px) {
  .totalInvestment {
    h5 {
      font-size: 2rem;
    }
    .label {
      font-size: 1rem;
    }
    .label-selic {
      color: #949494;
      font-weight: 600;
      font-size: 1rem;
    }
    .total-selic{
      color: #949494;
      font-weight: 100;
      font-size: 2rem;
    }
  }
}

</style>