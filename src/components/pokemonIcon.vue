<template>
  <div class="img-wrapper" :class="props.big ? 'big' : ''">
    <img
      v-intersection.once="onIntersection"
      :src="url"
      spinner-color="white"
      style="width: 100%; height: 100%"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { usePokemonData } from '../api/usePokemonData';
import { IPokemonIcon } from './models';

type PokemonIconProps = {
  name: string;
  big?: boolean;
};
const props = defineProps<PokemonIconProps>();

const url = ref('');
const onIntersection = (entry: { isIntersecting: boolean }) => {
  if (entry.isIntersecting) {
    execute({ name: props.name });
  }
};

const { execute } = usePokemonData<{ name: string }, IPokemonIcon>(
  (obj) => `/pokemon/${obj?.name}`,
  (r) => {
    url.value = props.big
      ? r.sprites?.other.home.front_default
      : r.sprites?.front_default;
    return r;
  }
);
</script>

<style lang="scss">
div.img-wrapper {
  width: 100px;
  height: 100px;
  &.big {
    width: 100%;
    max-width: 100vw;
    height: auto;
  }
}
</style>
