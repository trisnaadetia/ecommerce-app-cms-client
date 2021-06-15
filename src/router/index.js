import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'
import Banner from '../views/Banner'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  ,
  {
    path: '/banner',
    name: 'Banner',
    component: Banner
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Banner' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
