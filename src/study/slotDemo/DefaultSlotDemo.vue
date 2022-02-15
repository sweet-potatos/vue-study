<template>
  <div>
    <h3>默认插槽</h3>
    <div class="box">
      <DefaultSlotDemo1 title="食品分类">
        <img src="@/assets/logo.png" alt="">
      </DefaultSlotDemo1>
      <DefaultSlotDemo1 title="游戏分类">
        <ul>
          <li v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ul>
      </DefaultSlotDemo1>
      <DefaultSlotDemo1 title="电影分类">
        <video controls src="@/assets/snow.mp4" />
      </DefaultSlotDemo1>
    </div>
  </div>
</template>

<script>
import DefaultSlotDemo1 from './DefaultSlotDemo1'

export default {
  name: 'DefaultSlotDemo',
  components: { DefaultSlotDemo1 },
  data() {
    return {
      foods: ['炸鸡翅', '腌面', '清蒸鱼'],
      games: ['海岛奇兵', '王者荣耀', '荒野行动', '英雄联盟'],
      movies: ['长津湖', '雄狮少年', '水门桥']
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
