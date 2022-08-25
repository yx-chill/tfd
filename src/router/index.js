import { createRouter, createWebHistory } from 'vue-router'

const locale = localStorage.getItem('locale')
const defaultURL = locale == null ? 'tw' : (locale.indexOf('en') > 0 ? '/en' : '/tw' )

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
      path: '/tw',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/en',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/tw/about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/en/about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/tw/news',
      component: () => import('@/views/News.vue')
    },
    {
      path: '/en/news',
      component: () => import('@/views/News.vue')
    },
    {
      path: '/:catchAll(.*)*',
      redirect: defaultURL,
    },
  ]
})

export default router