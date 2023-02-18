<template>
  <q-page class="row">
    <PokemonAbout v-if="pokemonStore.section === 'about'" />
    <PokemonStats v-else />
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
const id = (router.currentRoute.value.params.id as string) || '';
const pokemonStore = usePokemonStore();
const pokeObj = ref<IPokeObj | null>(null);
const { execute } = usePokemonData<{ name: string }, IPokeObj>(
  (obj) => `/pokemon/${obj?.name}`,
  (r) => {
    pokeObj.value = r;
    console.log(r);
    return r;
  }
);
execute({ name: id });
</script>
