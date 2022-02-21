## vuex(类似dva.js)
#### 1.概念:
  &emsp;&emsp; 在Vue中实现集中状态(数据)管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件通信

#### 2.何时使用?
  &emsp;&emsp; 多个组件需要共享数据时

#### 3.搭建vuex环境
  1.创建文件 src/store/index.js
  ```javascript
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

  // 准备getters对象--vuex的计算属性
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
  ```

  1.在main.js中创建vm时传入store配置项
  ```javascript
  // 引用store
  import store from './store'
  ......

  // 创建vm
  new Vue({
    beforeCreate() {
      Vue.prototype.$bus = this
    },
    render: h => h(App),
    store
  }).$mount('#app')
  ```
