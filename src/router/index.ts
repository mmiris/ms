// import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;

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
