## vuex(类似dva.js)
#### 1.概念:
  &emsp;&emsp; 在Vue中实现集中状态(数据)管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理(读/写)，也是一种组件间通信的方式，且适用于任意组件通信

#### 2.何时使用?
  &emsp;&emsp; 多个组件需要共享数据时

#### 3.搭建vuex环境
  1.创建文件 <code>src/store/index.js</code>
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

  2.在<code>main.js</code>中创建vm时传入store配置项
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

#### 4.基本使用
  &emsp;&emsp; 1.创建文件 <code>src/store/index.js</code>
  &emsp;&emsp; 2.组件中读取Vuex的数据: <code>\$store.state.sum</code>
  &emsp;&emsp; 3.组件中修改Vuex的数据: <code>\$store.dispatch('actions中的方法名', 数据)</code>，<code>$store.commit('mutations中的方法名', 数据)</code>

#### 5.getters的使用
1.概念: 当state中的数据需要经过加工后再使用时，可以使用getters加工，相当于vuex中计算属性
2.在<code>store.js</code>中追加<code>getters</code>配置
  ```javascript
  ......

  const getters = {
    bigSum(state) {
      const { sum } = state
      return sum * 10
    }
  }

  // 创建store
  const store = new Vuex.Store({
    .....
    getters
  })

  export default store
  ```
3.组件中读取数据: <code>\$store.getters.bigSum</code>
