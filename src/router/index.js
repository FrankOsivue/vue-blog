import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // We use () => import(...) for Lazy Loading!
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/post/:id',
    name: 'post-detail',
    component: () => import('../views/PostDetailView.vue'),
  },
  {
    // Catch-all route for 404 errors
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
