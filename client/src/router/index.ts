import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueRx from 'vue-rx';

import Home from '../views/home.vue';

Vue.use(VueRouter);
Vue.use(VueRx);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
