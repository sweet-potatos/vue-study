<template>
  <div class="scope-slot-demo">
    <h3>{{ title }}</h3>
    <slot :games="games" msg="hello" />
  </div>
</template>

<script>

export default {
  name: 'ScopeSlotDemo1',
  props: ['title'],
  data() {
    return {
      games: ['海岛奇兵', '王者荣耀', '荒野行动', '英雄联盟']
    }
  }
}
</script>

<style scoped lang="less">
.scope-slot-demo {
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
