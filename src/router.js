import { createRouter, createWebHistory } from 'vue-router';
import Caeser from '@/components/Caesar.vue';
import Home from '@/views/Home.vue';

export default createRouter({
   history: createWebHistory(),
   routes: [
      { path: '/', component: Home },
      { path: '/caesar', component: Caeser }
   ]
})