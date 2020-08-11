import Vue from 'vue'
import Vuex from 'vuex'
import getters from './Getters/index.js'
import mutations from './Mutations/index'

Vue.use(Vuex)

const state = {
  cesiumViewer: null
}

export default new Vuex.Store({
    state,
    getters,
    mutations
})