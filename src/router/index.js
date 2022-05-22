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
