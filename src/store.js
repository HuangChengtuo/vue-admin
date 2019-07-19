import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: true,
    nickname: '黄秤砣',
    department: ['销售部', '财务部', '客服部', '物流部']
  },
  mutations: {
    login(state, user) {
      state.loginStatus = true
      state.nickname = user.nickname
      state.department = user.department
    },
    logout(state) {
      state.loginStatus = false
    },
    updateInformation(state, data) {
      state.nickname = data.nickname
    }
  },
  actions: {}
})
