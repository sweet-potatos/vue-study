<template>
  <div>
    <ModulesDemo1 />
    <hr>
    <ModulesDemo2 />
  </div>
</template>

<script>
import ModulesDemo1 from './ModulesDemo1.vue'
import ModulesDemo2 from './ModulesDemo2.vue'

export default {
  name: 'ModulesDemo',
  components: {
    ModulesDemo1,
    ModulesDemo2
  }
}
</script>
