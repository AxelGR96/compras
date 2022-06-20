import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'Orders',
    component: () => import(/* webpackChunkName: "about" */ '../components/paymentTable.vue')
  },
  {
    path: '/buy',
    name: 'Buys',
    component: () => import(/* webpackChunkName: "about" */ '../components/buys.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
