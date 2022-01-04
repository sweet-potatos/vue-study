<template>
  <div class="animate-demo1">
    <button type="button" @click="changeIsShow">显示/隐藏</button>
    <transition appear>
      <div v-show="isShow" class="text">测试测试</div>
    </transition>
    <transition name="test" appear>
      <div v-show="isShow" class="text text1">测试2测试2</div>
    </transition>
  </div>
</template>
<script>
export default {
  naem: 'AnimateDemo1',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    changeIsShow() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style scoped lang="less">
.animate-demo1 {
  padding: 10px;

  .text {
    width: 100%;
    height: 100px;
    background-color:skyblue;
    font-size: 22px;
    line-height: 100px;
    margin-top:10px
  }

  .text1 {
    background-color: orange;
  }

  .v-enter-active {
    animation: animate 0.5s ease;
  }

  .v-leave-active {
    animation: animate 0.5s ease reverse;
  }

  .test-enter-active {
    animation: animate 1s ease;
  }

  .test-leave-active {
    animation: animate 1s ease reverse;
  }
}

@keyframes animate {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
