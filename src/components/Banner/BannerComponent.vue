<template>
  <div class="banner">
    <div class="container flex flex-col mx-auto py-20 justify-between px-10">
      <h1>Simulador de investimento</h1>
      <h4>Descubra o quanto você pode economizar.</h4>
    </div>
  </div>
</template>

<style scoped lang="scss">
$heading-color: #E6E6E6;
  .banner {
    /* padding: 6rem 0 6rem 10rem; */
    background-color: #0B0B0B;
    h1, h4 {
      color: $heading-color
    }
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }
    h4 {
      font-size: 1.35rem;
      font-weight: lighter;
    }
  }

@media (max-width: 800px) {
  .banner {
    /* padding: 6rem 0 6rem 2rem; */
    h1 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
}
</style>