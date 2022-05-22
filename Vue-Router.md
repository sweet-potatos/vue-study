## vue-router

#### 1.路由概念:
  1.理解: 一个路由(route)就是一组映射关系(key-value), 多个路由需要路由器(router)进行管理
  2.前端路由: key是路径，value是组件

#### 2.基本使用
 1.安装Vue-router(3.x版本)

 2.应用插件: Vue.use(VueRouter)

 3.编写router配置项
 (1).创建文件 <code>src/router/index.js</code>
  ```javascript
  // 引用Vue核心库
  import Vue from 'vue'
  // 引用VueRouter
  import VueRouter from 'vue-router'
  // 应用VueRouter插件
  Vue.use(VueRouter)

  import LinkDemo1 from '@/vueRouteStudy/linkDemo/LinkDemo1'
  import LinkDemo2 from '@/vueRouteStudy/linkDemo/LinkDemo2'

  // 创建router实例对象，去管理一组一组的路由规则
  const router = new VueRouter({
    routes: [
      {
        path: '/linkDemo1',
        component: LinkDemo1
      },
      {
        path: '/linkDemo2',
        component: LinkDemo2
      }
    ]
  })

  export default router
  ```

  (2).在<code>main.js</code>中创建vm时传入router配置项
  ```javascript
  // 引用router
  import router from './router'
  ......

  // 创建vm
  new Vue({
    beforeCreate() {
      Vue.prototype.$bus = this
    },
    render: h => h(App),
    store,
    router
  }).$mount('#app')
  ```

  4.实现切换(active-class可配置激活样式)
  ```javascript
  <router-link to="/LinkDemo1" active-class="active">跳转到LinkDemo1</router-link>
  <router-link to="/LinkDemo2" active-class="active">跳转到LinkDemo2</router-link>
  ```

  5.指定展示位置
  <router-view />