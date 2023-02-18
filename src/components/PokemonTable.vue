<template>
  <div class="table">
    <div
      v-for="pokemon in props.pokemonData"
      :key="pokemon.name"
      class="table-item"
      @click.prevent="() => handleClick(pokemon)"
    >
      <PokemonCard :name="pokemon.name" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPokemon } from './models';
import PokemonCard from './pokemonInfo/PokemonCard.vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps<{ pokemonData: Array<IPokemon> }>();
const handleClick = (pokemon: IPokemon) => {
  router.push({ name: 'pokemon-id', params: { id: pokemon.name } });
};
</script>

<style lang="scss">
div.table {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1vw;
  margin: 0 1vw;
  width: 100%;
  min-height: calc(90vh - 100px);
  div.table-item {
    border-radius: 5px;
    border: 1px solid lightgray;
    width: 30vw;
    height: 200px;
    &:hover {
      box-shadow: 0 1px 5px grey;
      margin-top: -1px;
      margin-left: -1px;
    }
  }
}
</style>
