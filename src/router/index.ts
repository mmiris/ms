import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/login/LoginView.vue')
  },
  {
    path: '/main',
    component: () =>
      import(/* webpackChunkName: 'main' */ '../views/main/MainView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
