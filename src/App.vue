<script setup lang="ts">
import Header from './components/Header/HeaderComponent.vue'
import Banner from './components/Banner/BannerComponent.vue'
</script>

<template>
  <Header />
  <Banner/>
  <main>
    <RouterView/>
  </main>
</template>

<style lang="scss" scoped>
.investmentData {
  padding: 3rem 10rem 3rem 10rem;
}

@media (max-width: 800px) {
  .investmentData {
    padding: 3rem 2rem 3rem 2rem;
  }
}
</style>