<template>
  <div class="globalEventBusDemo">
    <GlobalEventBusDemo1 />
    <GlobalEventBusDemo2 />
  </div>
</template>

<script>
import GlobalEventBusDemo1 from './GlobalEventBusDemo1'
import GlobalEventBusDemo2 from './GlobalEventBusDemo2'

export default {
  name: 'GlobalEventBusDemo',
  components: { GlobalEventBusDemo1, GlobalEventBusDemo2 }
}
</script>

<style scoped>
.globalEventBusDemo {
  padding: 30px;
  background-color: #999
}
</style>
