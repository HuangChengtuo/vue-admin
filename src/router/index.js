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
        component: () => import('@/views/home/index'),
        meta: { icon: 'home', title: '首页' },
        name: 'homePage',
        path: '',
        show: true
      }
    ]
  },
  {
    component: layout,
    meta: { icon: 'laptop', title: '运维' },
    name: 'operation',
    path: '/operation',
    show: true,
    children: [
      {
        meta: { title: '远程控制' },
        name: 'remote-control',
        path: 'remote-control',
        show: true,
        children: [
          {
            meta: { title: '添加' },
            name: 'add',
            path: 'add'
          },
          {
            meta: { title: '修改' },
            name: 'edit',
            path: 'edit'
          }
        ]
      },
      {
        meta: { icon: 'book', title: '日志' },
        name: 'log',
        path: 'log',
        show: true,
        children: [
          {
            meta: { title: '日志A' },
            name: 'logA',
            path: 'logA',
            show: true
          },
          {
            meta: { title: '日志B' },
            name: 'logB',
            path: 'logB',
            show: true
          }
        ]
      }
    ]
  },
  {
    meta: { title: '首页' },
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
    meta: { title: '首页' },
    component: () => import('@/views/404'),
    name: '404',
    path: '/404'
  },
  { meta: { title: '首页' }, path: '*', redirect: '/404' }
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
