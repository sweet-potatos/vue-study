<template>
  <div class="custom-event-component-box2">
    <h2>学生名字: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="triggerPassData">传递数据</button>
    <button @click="unbindCustomEven">解绑事件</button>
  </div>
</template>

<script>
export default {
  name: 'CustomEventDemo1',
  data() {
    return {
      name: '小明',
      age: 20
    }
  },
  methods: {
    triggerPassData() {
      this.$emit('passData', this.name)
    },
    unbindCustomEven() {
      // 解绑一个自定义事件
      this.$off('passData')

      // 解绑多个自定义事件
      // this.$off(['passData', 'demoEven'])

      // 解绑所有自定义事件
      // this.$$off()
    }
  }
}
</script>

<style scoped>
.custom-event-component-box2{
  margin-top:30px;
  padding: 5px;
  background-color: pink;
}
</style>
