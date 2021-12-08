<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="showName">触发点击事件</button>
  </div>
</template>

<script>
import { mixinTest } from './mixin'

export default {
  name: 'MinxinDemo2',
  mixins: [mixinTest],
  data() {
    return {
      name: '李四',
      age: 30
    }
  }
}
</script>
