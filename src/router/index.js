import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Testimonials from '../views/Testimonials.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    conponent: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    conponent: Portfolio
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    conponent: Testimonials
  },
  {
    path: '/contact',
    name: 'Contact',
    conponent: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
