import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/about',
    name: 'Tous les concerts',
    component: () => import('../pages/about.vue'),
  },
  {
    path: '/mesReservations',
    name: 'Mes reservations',
    component: () => import('../pages/mesReservations.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;