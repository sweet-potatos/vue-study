<template>
  <div>
    <h2>当前的合为{{ sum }}</h2>
    <h2>放大后的合为{{ bigSum }}</h2>
    <select v-model="count">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>

    <!-- map方法形式 -->
    <button @click="increment(count)">+</button>
    <button @click="decrement(count)">-</button>
    <button @click="incrementOdd(count)">奇数+</button>
    <button @click="incrementWait(count)">setTimeout +</button>

    <button @click="INCREMENT(count)">+</button>
    <button @click="DECREMENT(count)">-</button>

    <h2>人员列表</h2>
    <ul>
      <li v-for="item in peopleList" :key="item.id">{{ item.name }}</li>
    </ul>

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ModulesDemo1',
  data() {
    return {
      count: 1
    }
  },
  computed: {
    ...mapState('addCountModule', { sum: 'sum' }),
    ...mapState('personMoudle', { peopleList: 'peopleList' }),

    // ...mapGetters('addCountModule', { bigSum: 'bigSum' })
    ...mapGetters('addCountModule', ['bigSum'])
  },
  methods: {
    // ...mapActions('addCountModule', { incrementOdd: 'incrementOdd', incrementWait: 'incrementWait' }),
    ...mapActions('addCountModule', ['incrementOdd', 'incrementWait']),

    // ...mapMutations('addCountModule', { increment: 'INCREMENT', decrement: 'DECREMENT' })
    ...mapMutations('addCountModule', ['INCREMENT', 'DECREMENT'])
  }
}
</script>

<style scoped>
select {
  width: 40px;
}
button {
  margin-left: 10px;
}
</style>

