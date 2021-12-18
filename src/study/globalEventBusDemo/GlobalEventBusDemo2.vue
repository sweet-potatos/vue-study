<template>
  <div class="globalEventBusDemo2">
    <h2>学生的名字: {{ name }}</h2>
    <h2>学生的年龄: {{ age }}</h2>
    <button @click="passData">传递数据</button>
    <button @click="destroyComponent">销毁组件</button>
  </div>
</template>

<script>
export default {
  name: 'GlobalEventBusDemo2',
  data() {
    return {
      name: '小明',
      age: 20
    }
  },
  beforeDestroy() {
    console.log('组件已销毁')
    this.$bus.$off('passData')
  },
  methods: {
    passData() {
      this.$bus.$emit('passData', this.name)
    },
    destroyComponent() {
      this.$destroy()
    }
  }
}
</script>

<style scoped>
.globalEventBusDemo2 {
  padding: 10px;
  margin-top: 20px;
  background-color: skyblue
}
</style>
