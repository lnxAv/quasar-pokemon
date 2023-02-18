<template>
  <q-page class="row">
    <PokemonTable :pokemonData="pokemonData"></PokemonTable>

    <q-footer elevate bordered style="height: 30px">
      <q-pagination
        class="row justify-center"
        v-model="pagination.page"
        :max="paginationMax"
        :max-pages="3"
        direction-links
        :ellipses="false"
        :boundary-numbers="false"
        color="white"
        active-color="lightgrey"
        size="md"
    /></q-footer>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed, onMounted } from 'vue';
import { usePokemonData } from 'src/api/usePokemonData';
import PokemonTable from 'src/components/PokemonTable.vue';
import { IPokemon } from 'src/components/models';

const pokemonData = ref<Array<IPokemon>>([]);

const pagination = ref({
  page: 0,
  rowsNumber: 20,
  guessLimit: 1,
});

const isMoreElement = ref(true);

const paginationMax = computed(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return isMoreElement.value
    ? pagination.value.page + 2
    : pagination.value.page;
});

const result = usePokemonData<
  { page: number; limit: number },
  { results: Array<IPokemon> }
>(
  (obj) =>
    `pokemon?limit=${
      obj?.limit ? obj.limit + 2 : pagination.value.rowsNumber + 1
    }&offset=${
      (obj?.page ? obj.page - 1 : 0) *
      (obj?.limit ?? pagination.value.rowsNumber)
    }`,
  (r) => {
    const elementLeft = r.results.length > pagination.value.rowsNumber; // -- check if element left with extra element
    isMoreElement.value = elementLeft;
    r.results.pop(); // -- remove extra element
    pokemonData.value = r.results;
    return r;
  }
);

onMounted(() => {
  result.execute();
});

watchEffect(async () => {
  result.execute({
    page: pagination.value.page,
    limit: pagination.value.rowsNumber,
  });
});
</script>
