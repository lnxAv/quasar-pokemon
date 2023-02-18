<template>
  <div>
    <img
      v-intersection.once="onIntersection"
      :src="url"
      spinner-color="white"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokemonData } from '../api/usePokemonData';

type PokemonIconProps = {
  name: string;
};
const props = defineProps<PokemonIconProps>();

const url = ref('');
const onIntersection = (entry: { isIntersecting: boolean }) => {
  if (entry.isIntersecting) {
    execute({ name: props.name });
  }
};

const { execute } = usePokemonData<
  { name: string },
  { sprites: { [sprite: string]: string } }
>(
  (obj) => `/pokemon/${obj?.name}`,
  (r) => {
    url.value = r.sprites?.front_default;
    return r;
  }
);
</script>
