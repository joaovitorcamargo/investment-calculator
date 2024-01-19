<script setup lang="ts"></script>

<template>
  <div class="totalInvestment grid row-gap-3">
    <div class="flex flex-column gap-3 w-full">
      <span class="label">Em 24 meses você terá</span>
      <h5>R$ 1.0020,00</h5>
      <hr class="align-self-start w-full">
    </div>
    <span class="taxInformation w-full">
      TAXA SELIC: <b>9,25%</b>
    </span>
    <span class="taxInformation w-full">
      RENTABILIDADE DO ARCA: <b>18% a.a.</b>
    </span>
  </div>
</template>

<style scoped lang="scss">
  .totalInvestment {
    h5 {
      font-weight: 600;
      font-size: 4.5rem;
    }
    .label {
      color:#2D2D2D;
      font-weight: 600;
      font-size: 2.5rem;
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
      font-size: 1.4rem;
    }
  }
}

</style>