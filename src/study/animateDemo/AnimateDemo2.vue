<template>
  <div class="animate-demo2">
    <h2>demo2</h2>
    <button type="button" @click="changeIsShow">显示/隐藏</button>
    <transition name="test" appear>
      <div v-show="isShow" class="text">测试测试</div>
    </transition>
  </div>
</template>

<script>
import { animateMixin } from './animateMixin'

export default {
  name: 'AnimateDemo2',
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
.animate-demo2 {
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
