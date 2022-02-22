<template>
  <div>
    <h2>当前的合为{{ sum }}</h2>
    <h2>放大后的合为{{ bigSum }}</h2>
    <select v-model="count">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数+</button>
    <button @click="incrementWait">setTimeout +</button> -->

    <!-- map方法形式 -->
    <button @click="increment(count)">+</button>
    <button @click="decrement(count)">-</button>
    <button @click="incrementOdd(count)">奇数+</button>
    <button @click="incrementWait(count)">setTimeout +</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'MapDemo',
  data() {
    return {
      count: 1
    }
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum
    // }

    // 借助mapState生成计算属性，从state中读取数据(对象写法)
    // ...mapState({ sum: 'sum' }),

    // 借助mapState生成计算属性，从state中读取数据(数组写法)
    ...mapState(['sum']),

    // 借助mapGetters生成计算属性，从state中读取数据(对象写法)
    // ...mapGetters({ bigSum: 'bigSum' })

    // 借助mapGetters生成计算属性，从state中读取数据(数组写法)
    ...mapGetters(['bigSum'])
  },
  methods: {
    // increment() {
    //   this.$store.commit('INCREMENT', this.count)
    // },
    // decrement() {
    //   this.$store.commit('DECREMENT', this.count)
    // },

    // 借助mapMutations生成mutations里面的方法(对象形式)
    ...mapMutations({ increment: 'INCREMENT', decrement: 'DECREMENT' }),

    // 借助mapMutations生成mutations里面的方法(数组形式)
    // ...mapMutations(['INCREMENT', 'DECREMENT']),

    // incrementOdd() {
    //   this.$store.dispatch('incrementOdd', this.count)
    // },
    // incrementWait() {
    //   this.$store.dispatch('incrementWait', this.count)
    // }

    // 借助mapActions生成actions里面的方法(对象形式)
    ...mapActions({ incrementOdd: 'incrementOdd', incrementWait: 'incrementWait' })

    // 借助mapActions生成actions里面的方法(数组形式)
    // ...mapActions(['incrementOdd', 'incrementWait']),
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
