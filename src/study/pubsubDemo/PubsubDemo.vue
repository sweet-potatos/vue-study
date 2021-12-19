<template>
  <div class="pubsubDemo">
    <PubsubDemo1 />
    <PubsubDemo2 />
  </div>
</template>

<script>
import PubsubDemo1 from './PubsubDemo1'
import PubsubDemo2 from './PubsubDemo2'

export default {
  name: 'PubsubDemo',
  components: { PubsubDemo1, PubsubDemo2 }
}
</script>

<style scoped>
.pubsubDemo {
  padding: 30px;
  background-color: #999
}
</style>
