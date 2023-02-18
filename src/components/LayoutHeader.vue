<template>
  <q-header style="background-color: white">
    <div v-if="router.currentRoute.value.params['id']" class="header-info">
      <div class="header-info-selection">
        <div>
          <q-btn
            round
            color="black"
            icon="arrow_back"
            style="height: 30px; width: 30px"
            @click="handleBackBtn"
          />
        </div>
        <q-toolbar class="text-white rounded-borders">
          <q-tabs
            v-model="pokemonStore.section"
            shrink
            dense
            class="bg-white-2 text-teal"
          >
            <q-tab name="about" icon="info" label="About" />
            <q-tab name="Stats" icon="hexagon" label="Stats" />
          </q-tabs>
          <p style="color: red">{{ pokemonStore.section }}</p>
        </q-toolbar>
      </div>
    </div>
    <div v-else class="header-search">
      <q-input
        square
        outlined
        bg-color="white"
        standout="bg-white text-black"
        v-model="text"
        label="Rechercher"
      />
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { usePokemonStore } from 'src/stores/pokemonStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const text = ref('');
const pokemonStore = usePokemonStore();
const handleBackBtn = () => {
  router.push('/');
};
</script>

<style lang="scss">
div.header-info {
  display: flex;
  flex-direction: colun;
  background-color: transparent;
  width: 100vw;
  height: 80px;
  padding: 10px;
  div.header-info-selection {
    margin: auto;
    display: flex;
  }
}
div.header-search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
  width: 100vw;
  height: 80px;
  padding: 10px;
}
</style>
