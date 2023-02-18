<template>
  <div style="position: relative; width: 100%; height: 100%">
    <div class="container">
      <div class="desc">Description</div>
      <div class="details">
        <div>
          <div v-for="type in props.pokeObj?.types" :key="type.slot">
            {{ type.type.name }}
          </div>
        </div>
        <div>{{ props.pokeObj?.height }} ft.</div>
        <div>{{ props.pokeObj?.weight }} lt.</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { usePokemonData } from 'src/api/usePokemonData';
import { IPokeObj } from 'src/components/models';

const props = defineProps<{ pokeObj: IPokeObj | null }>();

const result = usePokemonData(
  () => '',
  () => ''
);

onMounted(() => {
  result.execute();
});
</script>

<style lang="scss" scoped>
div.container {
  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  width: 500px;
  div.desc {
    border: 1px solid black;
    min-height: 50px;
    min-width: 280px;
    width: 300px;
    max-width: 100vw;
  }
  div.details {
    display: flex;
    flex-direction: row;
    min-width: 280px;
    width: 300px;
    max-width: 100vw;
    div {
      flex: 1;
      width: auto;
      border: 1px solid black;
    }
  }
}
</style>
