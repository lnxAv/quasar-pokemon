<template>
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
