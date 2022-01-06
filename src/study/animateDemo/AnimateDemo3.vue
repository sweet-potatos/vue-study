<template>
  <div class="animate-demo3">
    <h2>demo3</h2>
    <button type="button" @click="changeIsShow">显示/隐藏</button>
    <transition-group name="test" appear>
      <div v-show="isShow" key="1" class="text">测试测试</div>
      <div v-show="isShow" key="2" class="text">测试测试</div>
      <div v-show="isShow" key="3" class="text">测试测试</div>
      <div v-show="isShow" key="4" class="text">测试测试</div>
    </transition-group>
  </div>
</template>

<script>
import { animateMixin } from './animateMixin'

export default {
  name: 'AnimateDemo3',
  mixins: [animateMixin]
  // data() {
  //   return {
  //     isShow: true
  //   }
  // },
  // methods: {
  //   changeIsShow() {
  //     this.isShow = !this.isShow
  //   }
  // }
}
</script>

<style lang="less" scoped>
.animate-demo3 {
  padding: 10px;
  margin-bottom: 30px;

  .text {
    width: 100%;
    height: 100px;
    background-color:skyblue;
    font-size: 22px;
    line-height: 100px;
    margin-top: 10px;
    // transition: all 0.5s;
  }

  // 开始的起点
  .test-enter {
    transform: translateX(-100%);
  }

  // 开始的终点
  .test-enter-to {
    transform: translateX(0);
  }

  // 离开的起点
  .test-leave {
    transform: translateX(0);
  }

  // 离开的终点
  .test-leave-to {
    transform: translateX(-100%);
  }

  .test-enter-active,
  .test-leave-active {
    transition: all 0.5s;
  }
}
</style>
