import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
// vuex是一个插件，必须use使用这个插件

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations
})
