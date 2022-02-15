<template>
  <div>
    <h3>作用域插槽</h3>
    <div class="box">
      <ScopeSlotDemo1 title="游戏分类">
        <template scope="scopeData">
          <ul>
            <li v-for="(item, index) in scopeData.games" :key="index">
              {{ item }}
            </li>
          </ul>
        </template>
      </ScopeSlotDemo1>
      <ScopeSlotDemo1 title="游戏分类">
        <template scope="scopeData">
          <ol>
            <li v-for="(item, index) in scopeData.games" :key="index">
              {{ item }}
            </li>
          </ol>
          {{ scopeData.msg }}
        </template>
      </ScopeSlotDemo1>
      <ScopeSlotDemo1 title="游戏分类">
        <template scope="scopeData">
          <h4 v-for="(item, index) in scopeData.games" :key="index">{{ item }}</h4>
        </template>
      </ScopeSlotDemo1>
    </div>
  </div>
</template>

<script>
import ScopeSlotDemo1 from './ScopeSlotDemo1'

export default {
  name: 'ScopeSlotDemo',
  components: { ScopeSlotDemo1 }
}
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
