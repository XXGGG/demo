import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入样式初始化
import"./assets/styles/reset.css"

import axios from 'axios'
Vue.prototype.axios = axios ;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
