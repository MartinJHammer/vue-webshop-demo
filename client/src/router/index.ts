import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import VueRx from 'vue-rx';

import Home from './../modules/app/views/home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../modules/app/views/about.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../modules/products/views/products.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
