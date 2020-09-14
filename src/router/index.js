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
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  { path: '/apple',  name: 'apple', component: () => import('../views/demo/apple/apple.vue') },

  { path: '/drop',  name: 'drop', component: () => import('../views/test/drop.vue') },
  { path: '/grid',  name: 'grid', component: () => import('../views/test/grid.vue') },
  { path: '/vuex',  name: 'vuex', component: () => import('../views/test/testVuex/vuex.vue') },
  { path: '/cart',  name: 'cart', component: () => import('../views/test/testVuex/cart.vue') },
  { path: '/layout',  name: 'layout', component: () => import('../views/test/layout.vue') },
  { path: '/sun_moon',  name: 'sun_moon', component: () => import('../views/test/sun_moon.vue') },
  { path: '/text1',  name: 'text1', component: () => import('../views/test/text1.vue') },
  { path: '/flop',  name: 'flop', component: () => import('../views/test/flop.vue') },
  { path: '/FlexBox',  name: 'FlexBox', component: () => import('../views/test/FlexBox.vue') },
  { path: '/SpotLight',  name: 'SpotLight', component: () => import('../views/test/SpotLight.vue') }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
