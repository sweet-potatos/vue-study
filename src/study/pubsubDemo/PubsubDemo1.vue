<template>
  <div class="pubsubDemo1">
    <h2>学校的名字: {{ name }}</h2>
    <h2>学校的地址: {{ address }}</h2>
    <h2>全局事件总线传递数据: {{ studentName }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: 'PubsubDemo1',
  data() {
    return {
      name: '清华',
      address: '北京',
      studentName: ''
    }
  },
  mounted() {
    // 订阅消息
    this.subId = pubsub.subscribe('hello', this.getStudentData)
  },
  beforeDestroy() {
    // 取消订阅
    pubsub.unsubscribe(this.subId)
  },
  methods: {
    getStudentData(subName, value) {
      console.log('subName', subName)
      console.log('value', value)
      this.studentName = value
    }
  }
}
</script>

<style scoped>
.pubsubDemo1 {
  padding: 10px;
  margin-top: 20px;
  background-color: pink
}
</style>
