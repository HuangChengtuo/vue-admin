import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false,
    whiteList: ['login', '404', 'noPermission', 'homeLayout', 'homePage']
  },
  mutations: {
    changeCollapsed(state, flag) {
      state.collapsed = flag
    }
  },
  actions: {},
  modules: {}
})
