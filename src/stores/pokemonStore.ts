import { defineStore } from 'pinia';

interface IPokemonStore {
  section: 'about' | 'stats';
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): IPokemonStore => ({
    section: 'about',
  }),
  getters: {},
  actions: {
    setSection(section: 'about' | 'stats') {
      this.section = section;
    },
  },
});
