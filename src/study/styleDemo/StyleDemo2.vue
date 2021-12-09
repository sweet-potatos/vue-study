<template>
  <div>
    <p>姓名：{{ name }}</p>
    <p>年龄：{{ age }}</p>
  </div>
</template>

<script>
export default {
  name: 'StyleDemo2',
  data() {
    return {
      name: '小白',
      age: '30'
    }
  }
}
</script>
