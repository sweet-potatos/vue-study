<template>
  <div>
    <AnimateDemo1 />
    <hr>
    <AnimateDemo2 />
    <hr>
    <AnimateDemo3 />
    <hr>
    <AnimateDemo4 />
  </div>
</template>

<script>
import AnimateDemo1 from './AnimateDemo1'
import AnimateDemo2 from './AnimateDemo2'
import AnimateDemo3 from './AnimateDemo3'
import AnimateDemo4 from './AnimateDemo4'

export default {
  name: 'AnimateDemo',
  components: {
    AnimateDemo1,
    AnimateDemo2,
    AnimateDemo3,
    AnimateDemo4
  }
}

</script>
