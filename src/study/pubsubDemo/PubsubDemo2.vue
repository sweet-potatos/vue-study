<template>
  <div class="PubsubDemo2">
    <h2>学生的名字: {{ name }}</h2>
    <h2>学生的年龄: {{ age }}</h2>
    <button @click="passData">传递数据</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'PubsubDemo2',
  data() {
    return {
      name: '小明',
      age: 20
    }
  },
  methods: {
    passData() {
      // 发布消息
      pubsub.publish('hello', this.name)
    }
  }
}
</script>

<style scoped>
.PubsubDemo2 {
  padding: 10px;
  margin-top: 20px;
  background-color: skyblue
}
</style>
