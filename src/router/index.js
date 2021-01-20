import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../views/Layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      },
      {
        path: 'find',
        name: 'Find',
        component: () => import(/* webpackChunkName: "find" */ '../views/Find.vue'),
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import(/* webpackChunkName: "message" */ '../views/Message.vue'),
      },
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue'),
      },
    ],
  },
  {
    path: '/publishMoment',
    name: 'PublishMoment',
    component: () => import(/* webpackChunkName: "publishMoment" */ '../views/PublishMoment.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
