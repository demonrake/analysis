import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default createStore({
  state: {
    tableData:[],
    num:12,
  },
  mutations,
  actions,
  getters,
  modules: {
  }
})