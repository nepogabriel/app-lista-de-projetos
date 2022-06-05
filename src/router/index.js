import { createRouter, createWebHistory } from '@ionic/vue-router';
//import HomePage from '../views/HomePage.vue'
import ListPage from '../views/ListPage.vue';
import RegisterProjectPage from '../views/RegisterProjectPage';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: ListPage
  },
  {
    path: '/projeto/:id',
    name: 'Projeto',
    component: ()=> import('../views/ProjectPage.vue')
  },
  {
    path: '/registerProject',
    name: 'RegisterProject',
    component: RegisterProjectPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
