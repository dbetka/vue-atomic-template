import { createRouter, createWebHistory } from 'vue-router'
import { routesForRouter } from 'src/config/routes'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routesForRouter,
})

export default router
