import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:0,
  },
  getters:{
    doneTodos: state => {
      return state.num++
    }
  },
  mutations: {
    addNum(state,sum){
      state.num = state.num + sum
    },
    subNum(state,sum){
      state.num = sum
    }
  },
  actions: {
  },
  modules: {
  }
})
