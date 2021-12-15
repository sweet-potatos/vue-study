<template>
  <div class="box">
    <h2>获取demo1子组件的数据---学校名称: {{ schoolName }}</h2>
    <h2>获取demo2子组件的数据---学生名称: {{ studentName }}</h2>
    <h2>{{ refGetData }}</h2>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <CustomEventDemo1 :get-school-name="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法: 使用v-on或@) -->
    <CustomEventDemo2 @passData="getStudenName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法: 使用ref) -->
    <CustomEventDemo2 ref="demo2" />
  </div>
</template>

<script>
import CustomEventDemo1 from './CustomEventDemo1.vue'
import CustomEventDemo2 from './CustomEventDemo2.vue'

export default {
  name: 'CustomEventDemo',
  components: {
    CustomEventDemo1,
    CustomEventDemo2
  },
  data() {
    return {
      schoolName: '',
      studentName: '',
      refGetData: ''
    }
  },
  mounted() {
    this.$refs.demo2.$on('passData', this.getStudenName)
  },
  methods: {
    getSchoolName(name) {
      this.schoolName = name
    },
    getStudenName(name) {
      console.log('studentName', name)
      this.studentName = name
    }
  }
}
</script>

<style scoped>
.box {
  margin: 30px;
  padding: 10px 10px 30px;
  background-color: #999
}
</style>
