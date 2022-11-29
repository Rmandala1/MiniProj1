import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuemSouEu from '../views/QuemSouEu.vue'
import Oquefaço from '../views/Oquefaço.vue'
import Hobbies from '../views/Hobbies.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/QuemSouEu',
      name: 'QuemSouEu',
      component: QuemSouEu
    },
    {
      path: '/Oquefaço',
      name: 'Oquefaço',
      component: Oquefaço
    },
    {
      path: '/Hobbies',
      name: 'Hobbies',
      component: Hobbies
    },
  ]
})

export default router
