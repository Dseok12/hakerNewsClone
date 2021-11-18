import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutation from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: {},
    list: []
  },
  getters: {
    에스크 (state) {
      return state.ask
    },
    fechedItem (state) {
      return state.item
    }
  },
  mutations: mutation,
  actions: actions
})
