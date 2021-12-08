<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '小明',
      age: '18'
    }
  }
}
</script>
