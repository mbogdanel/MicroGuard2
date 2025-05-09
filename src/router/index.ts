import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Services from '../views/Services.vue'
import ServiceDetails from '../views/ServiceDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/services/:slug',
      name: 'ServiceDetails',
      component: ServiceDetails
    }
  ]
})

export default router