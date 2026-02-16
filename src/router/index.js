import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Students from '../pages/Students.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/students', component: Students }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
