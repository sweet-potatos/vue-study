<template>
  <div>
    <h2>当前的合为{{ $store.state.sum }}</h2>
    <select v-model="count">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数+</button>
    <button @click="incrementWait">setTimeout +</button>
  </div>
</template>

<script>
export default {
  name: 'AddCountDemo',
  data() {
    return {
      count: 1
    }
  },
  methods: {
    increment() {
      this.$store.commit('INCREMENT', this.count)
    },
    decrement() {
      this.$store.commit('DECREMENT', this.count)
    },
    incrementOdd() {
      this.$store.dispatch('incrementOdd', this.count)
    },
    incrementWait() {
      this.$store.dispatch('incrementWait', this.count)
    }
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
