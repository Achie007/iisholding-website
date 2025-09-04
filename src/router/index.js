import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about', // The URL for the page
      name: 'about',
      component: AboutView, // The component to load at that URL
    },
    {
      path: '/portfolio', // The URL for this page
      name: 'portfolio',
      component: PortfolioView, // The component to load
    },
    {
      path: '/contact', // The URL for this page
      name: 'contact',
      component: ContactView, // The component to load
    },
  ],
})

export default router
