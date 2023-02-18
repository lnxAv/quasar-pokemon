<template>
  <q-page class="row">
    <div class="container">
      <div class="container-title">
        <p>{{ title }}</p>
      </div>
      <div class="container-body">
        <div class="container-body-image">
          <PokemonIcon :name="name" big />
        </div>
        <div class="container-body-content">
          <PokemonAbout
            v-if="pokemonStore.section === 'about'"
            :poke-obj="pokeObj"
          />
          <PokemonStats v-else :poke-obj="pokeObj" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { usePokemonData } from '../api/usePokemonData';
import { usePokemonStore } from 'src/stores/pokemonStore';
import PokemonAbout from 'src/components/pokemonInfo/pokemonAbout.vue';
import PokemonStats from 'src/components/pokemonInfo/pokemonStats.vue';
import { useRouter } from 'vue-router';
import { IPokeObj } from 'src/components/models';
import PokemonIcon from 'src/components/pokemonIcon.vue';

const router = useRouter();
const name = ref((router.currentRoute.value.params.id as string) || '');
const title = computed(() => name.value + ' #' + pokeObj.value?.id);
const pokemonStore = usePokemonStore();
const pokeObj = ref<IPokeObj | null>(null);
const { execute } = usePokemonData<{ name: string }, IPokeObj>(
  (obj) => `/pokemon/${obj?.name}`,
  (r) => {
    pokeObj.value = r;
    return r;
  }
);
execute({ name: name.value });
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: max(calc(90vh - 100px), 500px);
  min-width: 100%;
  padding: 5px;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    min-height: calc(60vh - 100px);
  }
  div.container-title {
    width: 100%;
    height: 60px;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 50px;
    border: 1px solid red;
    @media only screen and (max-width: 600px) {
      font-size: 30px;
      padding: 0 20px;
    }
  }
  div.container-body {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    div.container-body-content {
      flex: 1;
      border: 1px solid red;
    }
    div.container-body-image {
      position: absolute;
      bottom: 0;
      right: -50px;
      width: 500px;
      @media only screen and (max-width: 600px) {
        position: relative;
        width: 50%;
        max-width: 200px;
        max-height: 200px;
      }
    }
  }
}
</style>
