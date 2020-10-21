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
  { path: '/apple',  name: 'apple', component: () => import('../views/demo/apple/apple.vue') },

  // css
  { path: '/drop',  name: 'drop', component: () => import('../views/css/drop.vue') },
  { path: '/flop',  name: 'flop', component: () => import('../views/css/flop.vue') },
  { path: '/SpotLight',  name: 'SpotLight', component: () => import('../views/css/SpotLight.vue') },
  { path: '/text1',  name: 'text1', component: () => import('../views/css/text1.vue') },
  { path: '/sun_moon',  name: 'sun_moon', component: () => import('../views/css/sun_moon.vue') },
  { path: '/text2',  name: 'text2', component: () => import('../views/css/text2.vue') },
  { path: '/hamburger',  name: 'hamburger', component: () => import('../views/css/hamburger.vue') },

  //test 
  { path: '/grid',  name: 'grid', component: () => import('../views/test/grid.vue') },
  { path: '/layout',  name: 'layout', component: () => import('../views/test/layout.vue') },
  { path: '/FlexBox',  name: 'FlexBox', component: () => import('../views/test/FlexBox.vue') },
  { path: '/vuex',  name: 'vuex', component: () => import('../views/test/testVuex/vuex.vue') },
  { path: '/cart',  name: 'cart', component: () => import('../views/test/testVuex/cart.vue') },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
