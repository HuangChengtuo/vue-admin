import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/views/Login'
import store from '@/store'
import Home2 from '@/views/Home2'
import HelloWorld from "@/components/HelloWorld";
import About from '@/views/About'

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
      path: '/home2',
      name: 'home2',
      component: Home2
    },
    {
      path: '/home/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'hello',
          component: HelloWorld
        },
        {
          path: 'about',
          component: About
        }
      ],
      beforeEnter: (to, from, next) => {
        if (store.state.loginStatus) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})
