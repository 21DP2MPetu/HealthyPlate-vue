import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ABOUT',
      name: 'about',
      component: AboutView
    },
    {
      path: '/LOGIN',
      name: 'login',
      component: LoginView
    },
    {
      path: '/REGISTER',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
