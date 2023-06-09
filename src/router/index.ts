import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/localCache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: 'login' */ '../views/login/LoginView.vue')
  },
  {
    path: '/main',
    component: () => import(/* webpackChunkName: 'main' */ '../views/main/MainView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    if (!localCache.getItem('token')) return '/login'
  }
})

export default router
