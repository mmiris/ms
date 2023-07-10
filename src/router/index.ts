import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import localCache from '@/utils/local-cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import(/* webpackChunkName: 'login' */ '../views/login/LoginView.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import(/* webpackChunkName: 'main' */ '../views/main/MainView.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    if (!localCache.getItem('token') || !sessionStorage.getItem('state')) {
      return '/login'
    }
  }
})

export default router
