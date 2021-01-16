import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About/About.vue';
import Flex from '@/views/Flex/Flex.vue';
import Animations from '@/views/Animations/Animations.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Flex,
  },
  {
    path: '/animations',
    name: 'Animations',
    component: Animations,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
