import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  // demo
  { path: '/drop',  name: 'drop', component: () => import('../views/demo/drop.vue') },
  { path: '/flop',  name: 'flop', component: () => import('../views/demo/flop.vue') },
  { path: '/hamburger',  name: 'hamburger', component: () => import('../views/demo/hamburger.vue') },
  { path: '/Skeleton',  name: 'Skeleton', component: () => import('../views/demo/Skeleton.vue') },
  { path: '/SpotLight',  name: 'SpotLight', component: () => import('../views/demo/SpotLight.vue') },
  { path: '/sun_moon',  name: 'sun_moon', component: () => import('../views/demo/sun_moon.vue') },
  { path: '/text1',  name: 'text1', component: () => import('../views/demo/text1.vue') },
  { path: '/text2',  name: 'text2', component: () => import('../views/demo/text2.vue') },
  { path: '/thqby',  name: 'thqby', component: () => import('../views/demo/thqby.vue') },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
