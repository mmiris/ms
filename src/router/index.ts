import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/local-cache'

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
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: 'main' */ '../views/main/MainView.vue'),
    children: []
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
