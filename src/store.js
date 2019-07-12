import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: true,
    accsee:[]
  },
  mutations: {
    login(state,) {
      state.loginStatus = true
    },
    logout(state) {
      state.loginStatus = false
    }
  },
  actions: {}
})
