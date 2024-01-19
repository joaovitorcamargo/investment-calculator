<script setup lang="ts">
import {Total, FormInvestment} from './components/index'

</script>

<template>
  <div class="grid w-full row-gap-8">
      <div class="xl:col-6 lg:col-12 sm:col-12">
        <FormInvestment/>
      </div>
      <div class="xl:col-5 xl:col-offset-1 lg:col-12 sm:col-12">
        <Total/>
      </div>
  </div>
</template>