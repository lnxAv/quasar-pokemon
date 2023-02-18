<template>
  <div class="parent">
    Stats meter
    <div class="test" :style="{ clipPath: path }">
      <div class="test-interior" :style="{ clipPath: path }">HI</div>
    </div>
    <div class="circle">
      <div class="circle half" />
      <div class="circle third" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IPokeObj } from 'src/components/models';

const props = defineProps<{ pokeObj: IPokeObj | null }>();
const path = computed(() => {
  return `polygon(
    50% ${sideA(props.pokeObj?.stats?.[0].base_stat || 0)},
    ${sideB(props.pokeObj?.stats?.[1].base_stat || 0)},
    ${sideC(props.pokeObj?.stats?.[2].base_stat || 0)},
    50% ${sideD(props.pokeObj?.stats?.[3].base_stat || 0)},
    ${sideE(props.pokeObj?.stats?.[4].base_stat || 0)},
    ${sideF(props.pokeObj?.stats?.[5].base_stat || 0)})`;
});
const sideA = (amount: number) => {
  const minY = 50;
  const maxY = 0;
  const total = 100;
  const resultY = minY + ((maxY - minY) / total) * amount;
  return resultY + '%';
};

const sideB = (amount: number) => {
  const minX = 50;
  const maxX = 100;
  const minY = 50;
  const maxY = 25;
  const total = 100;
  const resultX = minX + ((maxX - minX) / total) * amount;
  const resultY = minY - ((minY - maxY) / total) * amount;
  return resultX + '% ' + resultY + '%';
};

const sideC = (amount: number) => {
  const minX = 50;
  const maxX = 100;
  const minY = 50;
  const maxY = 75;
  const total = 100;
  const resultX = minX + ((maxX - minX) / total) * amount;
  const resultY = minY - ((minY - maxY) / total) * amount;
  return resultX + '% ' + resultY + '%';
};

const sideD = (amount: number) => {
  const minY = 50;
  const maxY = 100;
  const total = 100;
  const resultY = minY - ((minY - maxY) / total) * amount;
  return resultY + '%';
};

const sideE = (amount: number) => {
  const minX = 50;
  const maxX = 0;
  const minY = 50;
  const maxY = 75;
  const total = 100;
  const resultX = minX + ((maxX - minX) / total) * amount;
  const resultY = minY - ((minY - maxY) / total) * amount;
  return resultX + '% ' + resultY + '%';
};

const sideF = (amount: number) => {
  const minX = 50;
  const maxX = 0;
  const minY = 50;
  const maxY = 25;
  const total = 100;
  const resultX = minX + ((maxX - minX) / total) * amount;
  const resultY = minY - ((minY - maxY) / total) * amount;
  return resultX + '% ' + resultY + '%';
};
</script>

<style lang="scss">
div.parent {
  position: relative;
  width: 200px;
  height: 200px;
  padding: 0;
  margin: 0;
}
div.test {
  position: absolute;
  width: 85%;
  height: 100%;
  padding: 0;
  margin: 0 5%;
  opacity: 0.6;
  background: green;
}
div.test-interior {
  position: relative;
  top: 10px; /* equal to border thickness */
  left: 10px; /* equal to border thickness */
  width: calc(100% - 20px); /* container height - (border thickness * 2) */
  height: calc(100% - 20px); /* container height - (border thickness * 2) */
  padding: 0;
  margin: 0;
  opacity: 0.9;
  background: grey;
}
div.circle {
  position: absolute;
  border: 1px solid grey;
  width: 100%;
  height: 100%;
  margin: auto -5px;
  border-radius: 100%;
  z-index: -1;
  .half {
    width: 50%;
    height: 50%;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
  }
  .third {
    width: 75%;
    height: 75%;
    top: 50%;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(-50%);
  }
}
</style>
