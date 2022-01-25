<template>
  <div>
    <button type="button" @click="getStudentData">获取学生数据</button>
    <button type="button" @click="getCarData">获取汽车数据</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProxyDemo2',
  methods: {
    getStudentData() {
      axios.get('http://localhost:8080/test/students')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getCarData() {
      axios.get('http://localhost:8080/demo/cars')
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
