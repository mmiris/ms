import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/localCache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
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
    if (!localCache.getItem('token') || !sessionStorage.getItem('state')) {
      return '/login'
    }
  }
})

export default router
