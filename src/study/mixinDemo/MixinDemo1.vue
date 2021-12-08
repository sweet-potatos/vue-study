<template>
  <div>
    <p>{{ name | mySliceGlobal }}</p>
    <p>{{ age }}</p>
    <button @click="showName">触发点击事件</button>
  </div>
</template>

<script>
import { mixinTest } from './mixin'

export default {
  name: 'MinxinDemo1',
  mixins: [mixinTest],
  data() {
    return {
      name: '张三123456789',
      age: 20
    }
  }
}
</script>
