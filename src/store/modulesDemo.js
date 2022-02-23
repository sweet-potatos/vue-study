// 引用Vue核心库
import Vue from 'vue'
// 引用Vuex
import Vuex from 'vuex'
import { nanoid } from 'nanoid'
import axios from 'axios'
// 应用Vuex插件
Vue.use(Vuex)

const addCountModule = {
  namespaced: true,
  state() {
    return {
      sum: 0
    }
  },
  getters: {
    bigSum(state) {
      const { sum } = state
      return sum * 10
    }
  },
  actions: {
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
  },
  mutations: {
    INCREMENT(state, count) {
      const { sum } = state
      state.sum = sum + count
    },
    DECREMENT(state, count) {
      const { sum } = state
      state.sum = sum - count
    }
  }
}

const personMoudle = {
  namespaced: true,
  state() {
    return {
      peopleList: [
        { id: nanoid(), name: '张三' },
        { id: nanoid(), name: '李四' }
      ]
    }
  },
  getters: {},
  actions: {
    addSentence(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          console.log('response', response)
          const { data } = response
          const sentenceObj = { id: nanoid(), name: data }
          context.commit('ADD_PERSON', sentenceObj)
        },
        errors => {
          console.log('errors', errors)
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, obj) {
      state.peopleList.unshift(obj)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    addCountModule,
    personMoudle
  }
})

export default store
