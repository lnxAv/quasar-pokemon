// import { boot } from 'quasar/wrappers'
import axios from 'axios';

// https://pokeapi.co/docs/v2
const api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' });

export { api };
