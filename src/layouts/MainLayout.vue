<template>
  <q-layout view="lHh Lpr lFf">
    <LayoutHeader />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import LayoutHeader from 'src/components/LayoutHeader.vue';
</script>
