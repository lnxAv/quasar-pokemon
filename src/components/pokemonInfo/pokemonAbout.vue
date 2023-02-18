<template>
  <div class="container">
    <div class="desc">Description</div>
    <div class="details">
      <div>type</div>
      <div>{{ props.weigth }} lb.</div>
      <div>{{ props.height }} ft.</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePokemonData } from 'src/api/usePokemonData';
import { IPokemon, IPokeObj } from 'src/components/models';

const props = defineProps<Partial<IPokeObj>>();
const pokemonAboutData = ref<Array<IPokemon>>([]);

const result = usePokemonData(
  () => '',
  () => ''
);

onMounted(() => {
  result.execute();
});
</script>

<style lang="scss">
div.container {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  div.desc {
    border: 1px solid black;
  }
  div.details {
    display: flex;
    flex-direction: row;
    div {
      min-height: 32%;
      width: auto;
      border: 1px solid black;
    }
  }
}
</style>
