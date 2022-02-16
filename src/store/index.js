import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  sum: 0
}

const actions = {
  incrementOdd(context, count) {
    const { state: { sum = 0 }} = context
    if (sum % 2) {
      context.commit('INCREMENT', count)
    } else {
      console.log('偶数不加')
    }
  },
  incrementWait(context, count) {
    setTimeout(() => {
      context.commit('INCREMENT', count)
    }, 1000)
  }
}

const mutations = {
  INCREMENT(state, count) {
    const { sum } = state
    state.sum = sum + count
  },
  DECREMENT(state, count) {
    const { sum } = state
    state.sum = sum - count
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
