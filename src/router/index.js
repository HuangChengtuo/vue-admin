import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    component: () => import('@/views/login/index'),
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
