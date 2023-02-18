<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { usePokemonData } from 'src/api/usePokemonData';
import { IPokemon } from 'src/components/models';

const pokemonAboutData = ref<Array<IPokemon>>([]);

const result = usePokemonData(
  () => '',
  () => ''
);

onMounted(() => {
  result.execute();
});
</script>
