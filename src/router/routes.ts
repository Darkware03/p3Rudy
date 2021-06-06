import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/ini',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/compras',
    component: () => import('pages/compras.vue')
  },
  {
    path: '/',
    component: () => import('pages/inicio.vue')
  }
];

export default routes;
