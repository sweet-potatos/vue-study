<template>
  <div class="custom-event-component-box1">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <button @click="passSchoolName">传递数据</button>
  </div>
</template>

<script>
export default {
  name: 'CustomEventDemo1',
  props: ['getSchoolName'],
  data() {
    return {
      name: '清华',
      address: '北京'
    }
  },
  methods: {
    passSchoolName() {
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
.custom-event-component-box1{
  margin-top: 30px;
  padding: 5px;
  background-color: skyblue;
}
</style>
