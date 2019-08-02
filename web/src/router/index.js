import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/blog/blog.vue')
    },
    {
      path: '/reward',
      name: 'reward',
      component: () => import('@/views/reward/reward.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('@/views/course/course.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/about.vue')
    }
  ]
})
