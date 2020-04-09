import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registration from '../views/Register.vue'
import Registered from '../views/Registered.vue'
import VerifyEmail from '../views/VerifyEmail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Login
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/registered',
    name: 'Registered',
    component: Registered
  },
  {
    path: '/email/verify/:id/:hash',
    name: 'VerifyEmail',
    component: VerifyEmail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
