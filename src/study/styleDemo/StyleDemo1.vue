<template>
  <div class="demo">
    <p>姓名：{{ name }}</p>
    <p class="a">年龄：{{ age }}</p>
  </div>
</template>

<script>
export default {
  name: 'StyleDemo1',
  data() {
    return {
      name: '小明',
      age: '18'
    }
  }
}
</script>

<style scoped lang="less">
  .demo {
    background-color: aqua;
    .a {
      font-size: 30px;
    }
  }
</style>
