<template>
  <button type="button" @click="getStudentData">获取学生数据</button>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ProxyDemo1',
  methods: {
    getStudentData() {
      axios.get('http://localhost:8080/students')
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
