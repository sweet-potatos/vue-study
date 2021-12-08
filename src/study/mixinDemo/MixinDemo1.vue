<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="showName">触发点击事件</button>
  </div>
</template>

<script>
import { mixinTest } from './mixin'
console.log('mixinTest', mixinTest)

export default {
  name: 'MinxinDemo1',
  mixins: [mixinTest],
  data() {
    return {
      name: '张三',
      age: 20
    }
  }
}
</script>
