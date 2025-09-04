import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },

  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

// THIS IS THE NEW LOGIC
router.beforeEach(() => {
  const path = sessionStorage.getItem('redirect')
  if (path) {
    sessionStorage.removeItem('redirect')
    router.push(path)
  }
})

export default router
