<template>
  <div class="name-slot-demo">
    <h3>{{ title }}</h3>
    <slot name="center">挖一个名为center的坑</slot>
    <slot name="footer">挖一个名为footer的坑</slot>
  </div>
</template>

<script>

export default {
  name: 'NameSlotDemo1',
  props: ['title']
}
</script>

<style scoped lang="less">
.name-slot-demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  margin-right: 40px;
  text-align: center;

  h3 {
    background-color: orange;
    text-align: center;
  }

  ul, li {
    list-style: none;
    padding-left: 10px;
  }

  img, video {
    width: 100%;
  }
}
</style>
