// 不使用模块化的方式
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isStrong: false
  },
  mutations: {
    beStrong (state) {
      state.isStrong = true
    }
  }
})

export default store

// 模块化的方式
// export const state = () => ({
//   isStrong: false
// })

// export const mutations = {
//   beStrong(state) {
//     state.isStrong = true
//   }
// }