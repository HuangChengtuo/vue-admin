import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'

Vue.use(VueRouter)

const routes = [
  {
    component: layout,
    meta: { title: '首页' },
    name: 'homePage',
    path: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    component: () => import('@/views/login/index'),
    meta: { title: '登录' },
    name: 'login',
    path: '/login'
  },
  {
    component: () => import('@/views/404'),
    name: '404',
    path: '/404'
  },
  { path: '*', redirect: '/404' }
]

const router = new VueRouter({
  routes
})

export default router
