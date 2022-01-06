<template>
  <div class="animate-demo4">
    <h2>demo4</h2>
    <button type="button" @click="changeIsShow">显示/隐藏</button>
    <transition
      name="animate__animated animate__bounce"
      appear
      enter-active-class="animate__zoomInUp"
      leave-active-class="animate__zoomOutUp"
    >
      <div v-show="isShow" class="text">测试测试</div>
    </transition>
  </div>
</template>

<script>
import { animateMixin } from './animateMixin'
import 'animate.css'

export default {
  name: 'AnimateDemo4',
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
.animate-demo4 {
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
}
</style>
