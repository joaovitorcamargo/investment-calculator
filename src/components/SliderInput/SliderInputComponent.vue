<script setup lang="ts">
import { onMounted, useAttrs, ref } from 'vue';
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const attrs = useAttrs();

const currentValue = ref(attrs.min)

onMounted(() => {
  const getSlider = document.getElementById(attrs.id);

  if (getSlider) {
    getSlider.addEventListener('input', function () {
      const min = Number(getSlider.min);
      const max = Number(getSlider.max);
      const value = Number(getSlider.value);
      const percentage = ((value - min) / (max - min)) * 100;
      currentValue.value = value;
      getSlider.style.background = `linear-gradient(to right, #54d4a0 0%, #54d4a0 ${percentage}%, #f0f0f0 ${percentage}%, #f0f0f0 100%)`;
    });
  }
})


function emitValue(event) {
  currentValue.value = event.target.value;
  emit('update:modelValue', currentValue.value)
}

</script>

<template>
  <input
    type="range"
    class="slider"
    v-bind="$attrs"
    :value="props.modelValue"
    @input="emitValue($event)">
</template>

<style scoped>
.slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: .75rem;
  border-radius: 10px;
  outline: none;
  transition: background-color 0.2s, opacity 0.2s;
  background-color: #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    box-shadow: 0 0 5px #54d4a0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 2.48rem;
    height: 2.48rem;
    border-radius: 50%;
    background-color: #54d4a0;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background-color: #54d4a0;
    cursor: pointer;
  }
}

</style>