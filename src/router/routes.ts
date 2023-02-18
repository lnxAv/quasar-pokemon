import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/pokemon',
  },
  {
    name: 'pokemon',
    path: '/pokemon',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/pokemon',
        component: () => import('src/pages/TablePage.vue'),
      },
      {
        name: 'pokemon-id',
        path: '/pokemon/:id',
        component: () => import('src/pages/PokemonPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
