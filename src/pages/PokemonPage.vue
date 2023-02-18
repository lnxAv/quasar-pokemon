<template>
  <q-page class="row">
    <h3>{{ id }}</h3>
    <PokemonAbout v-if="pokemonStore.section === 'about'" :poke-obj="pokeObj" />
    <PokemonStats v-else :poke-obj="pokeObj" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokemonData } from '../api/usePokemonData';
import { usePokemonStore } from 'src/stores/pokemonStore';
import PokemonAbout from 'src/components/pokemonInfo/pokemonAbout.vue';
import PokemonStats from 'src/components/pokemonInfo/pokemonStats.vue';
import { useRouter } from 'vue-router';
import { IPokeObj } from 'src/components/models';

const router = useRouter();
const id = ref((router.currentRoute.value.params.id as string) || '');
const pokemonStore = usePokemonStore();
const pokeObj = ref<IPokeObj | null>(null);
const { execute } = usePokemonData<{ name: string }, IPokeObj>(
  (obj) => `/pokemon/${obj?.name}`,
  (r) => {
    pokeObj.value = r;
    return r;
  }
);
execute({ name: id.value });
</script>
