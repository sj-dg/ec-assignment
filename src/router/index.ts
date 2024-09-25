import { createRouter, createWebHistory } from 'vue-router'
import ExampleOneView from '../views/ExampleOneView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'example-1',
      component: ExampleOneView
    },
    {
      path: '/example-2',
      name: 'example-2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExampleTwoView.vue')
    }
  ]
})

export default router
