import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Layout from "@/views/Layout"
import Login from '@/views/Login'
import About from '@/views/About'
import Home from '@/views/Home'
import Information from '@/views/user/Information'
import SalesStatements from "@/views/sales/SalesStatements";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home/',
      component: Layout,
      meta: {title: '首页'},
      beforeEnter: isLogin,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
          meta: {title: '工作台'}
        }
      ]
    },
    {
      path: '/sales/',
      component: Layout,
      meta: {title: '销售'},
      beforeEnter: isLogin,
      children: [
        {
          path: 'salesStatements',
          name: 'salesStatements',
          component:SalesStatements,
          meta:{title:'销售报表'}
        }
      ]
    },
    {
      path: '/user/',
      component: Layout,
      meta: {title: '个人中心'},
      beforeEnter: isLogin,
      children: [
        {
          path: 'information',
          name: 'information',
          component: Information,
          meta: {title: '个人资料'}
        },
        {
          path: 'about',
          name: 'about',
          component: About,
          meta: {title: '关于'}
        }
      ]
    }
  ]
})

function isLogin(to, from, next) {
  if (store.state.loginStatus) {
    next()
  } else {
    next('/login')
  }
}
