<script setup lang="ts">
  import logo_primo from '../../assets/images/logo-grupo-primo.svg'
</script>

<template>
  <header class="flex header">
    <img class="logo-header" :src="logo_primo" alt="Logo Primo">
  </header>
</template>

<style scoped lang="scss">
  .header {
    padding: 3rem 0 3rem 10rem;
  }

  @media (max-width: 800px) {
  .header {
    padding: 3rem 0 3rem 2rem;
  }
}
</style>