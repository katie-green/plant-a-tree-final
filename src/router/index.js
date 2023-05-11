import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Donate from '../views/Donate.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router