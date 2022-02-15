<template>
  <div>
    <h3>具名插槽</h3>
    <div class="box">
      <NameSlotDemo1 title="食品分类">
        <img slot="center" src="@/assets/logo.png" alt="">
        <a slot="footer" href="https://www.baidu.com/" target="_blank">跳转链接</a>
      </NameSlotDemo1>
      <NameSlotDemo1 title="游戏分类">
        <ul slot="center">
          <li v-for="(item, index) in games" :key="index">
            {{ item }}
          </li>
        </ul>
        <a slot="footer" href="https://www.baidu.com/" target="_blank">跳转链接</a>
      </NameSlotDemo1>
      <NameSlotDemo1 title="电影分类">
        <video slot="center" controls src="@/assets/snow.mp4" />
        <!-- 2.6版本新写法 -->
        <template v-slot:footer>
          <a href="https://www.baidu.com/" target="_blank">跳转链接</a>
          <h4>2.6版本新写法 </h4>
        </template>
        <!-- 旧的写法 -->
        <!-- <template slot="footer">
          <a href="https://www.baidu.com/" target="_blank">跳转链接</a>
          <h4>旧的写法 </h4>
        </template> -->
      </NameSlotDemo1>
    </div>
  </div>
</template>

<script>
import NameSlotDemo1 from './NameSlotDemo1'

export default {
  name: 'NameSlotDemo',
  components: { NameSlotDemo1 },
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
