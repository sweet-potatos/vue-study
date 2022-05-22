<template>
  <div>
    <router-link to="/LinkDemo1" active-class="active">跳转到LinkDemo1</router-link>
    <router-link to="/LinkDemo2" active-class="active">跳转到LinkDemo2</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'LinkDemo'
}
</script>

<style lang="less" scoped>
.active {
  color: red
}
</style>
