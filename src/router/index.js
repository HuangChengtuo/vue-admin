import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/layout'
import cookie from 'js-cookie'

Vue.use(VueRouter)

const routes = [
  {
    component: layout,
    path: '/home/',
    show: true,
    children: [
      {
        component: () => import('@/views/home'),
        meta: { icon: 'home', title: '首页' },
        name: 'homePage',
        path: '',
        show: true
      }
    ]
  },
  {
    component: layout,
    meta: { title: '销售', icon: 'shopping-cart' },
    name: 'sales',
    path: '/sales',
    show: true,
    children: [
      {
        component: () => import('@/views/sales/salesStatement'),
        meta: { title: '销售情况' },
        name: 'salesStatement',
        path: 'statement',
        show: true
      },
      {
        meta: { title: '订单列表' },
        name: 'orderList',
        path: 'order-list',
        show: true
      }
    ]
  },
  {
    meta: { title: '首页' },
    path: '/',
    redirect: '/home'
  },
  {
    component: () => import('@/views/login'),
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

router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
    return
  }
  if (cookie.get('token')) {
    next()
  } else {
    next({ name: 'login' })
  }
})

export default router
