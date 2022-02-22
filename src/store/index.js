// 引用Vue核心库
import Vue from 'vue'
// 引用Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备state对象--保存具体数据
const state = {
  sum: 0
}

// 准备actions对象--响应组件中用户的动作
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

// 准备mutations对象--修改state中的数据
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

const getters = {
  bigSum(state) {
    const { sum } = state
    return sum * 10
  }
}

// 创建store
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store
