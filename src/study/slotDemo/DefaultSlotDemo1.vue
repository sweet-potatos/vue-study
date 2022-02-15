<template>
  <div class="default-slot-demo">
    <h3>{{ title }}</h3>
    <slot />
  </div>
</template>

<script>

export default {
  name: 'DefaultSlotDemo1',
  props: ['title']
}
</script>

<style scoped lang="less">
.default-slot-demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
  margin-right: 40px;

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
