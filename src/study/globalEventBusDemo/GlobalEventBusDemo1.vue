<template>
  <div class="globalEventBusDemo1">
    <h2>学校的名字: {{ name }}</h2>
    <h2>学校的地址: {{ address }}</h2>
    <h2>全局事件总线传递数据: {{ studentName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'GlobalEventBusDemo1',
  data() {
    return {
      name: '清华',
      address: '北京',
      studentName: ''
    }
  },
  mounted() {
    this.$bus.$on('passData', this.getStudentData)
  },
  methods: {
    getStudentData(value) {
      this.studentName = value
    }
  }
}
</script>

<style scoped>
.globalEventBusDemo1 {
  padding: 10px;
  margin-top: 20px;
  background-color: pink
}
</style>
