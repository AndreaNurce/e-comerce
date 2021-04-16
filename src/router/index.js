import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import logIn from '@/components/logIn.vue'

const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'login',
    component: logIn
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
