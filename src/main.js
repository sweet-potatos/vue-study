import Vue from 'vue'
import App from './App.vue'
import store from './store/modulesDemo'
import router from './router'

// import plugin from './utils/plugin'

Vue.config.productionTip = false

// Vue.use(plugin)

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  store,
  router
}).$mount('#app')
