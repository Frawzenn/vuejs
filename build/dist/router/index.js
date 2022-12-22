import { createRouter, createWebHashHistory } from '../../_snowpack/pkg/vue-router.js'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: () => import("../pages/index.vue.js"),
  },
  {
    path: '/about',
    name: 'Tous les concerts',
    component: () => import("../pages/about.vue.js"),
  },
  {
    path: '/mesReservations',
    name: 'Mes reservations',
    component: () => import("../pages/mesReservations.vue.js"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;