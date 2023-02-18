<template>
  <q-page class="row">
    {{ props.name }}
    <PokemonIcon :name="props.name" />
  </q-page>
</template>

<script setup lang="ts">
import PokemonIcon from '../pokemonIcon.vue';
const props = defineProps<{ name: string }>();
</script>

<style lang="scss"></style>
