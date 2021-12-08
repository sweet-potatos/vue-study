<template>
  <div>
    <h1 id="title-dom" ref="title-ref">测试</h1>
    <button id="btn-dom" ref="btn-ref" @click="showDOM">点击展示DOM</button>
    <Student id="people-dom" />
    <Student ref="people-ref" />
    <hr>
    <Teacher name="小红" :age="18" sex="男" :x="1" :y="2" />
  </div>
</template>

<script>
import Student from './components/Student.vue'
import Teacher from './components/Teacher.vue'

export default {
  name: 'School',
  components: { Student, Teacher },
  data() {
    return {
      name: '东风南方',
      address: '花都'
    }
  },
  methods: {
    showDOM() {
      const getTitleDom = document.getElementById('title-dom')
      const getTitleRefDom = this.$refs['title-ref']
      console.log('getTitleDom', getTitleDom)
      console.log('getTitleRefDom', getTitleRefDom)

      const getBtnDom = document.getElementById('btn-dom')
      const getBtnRefDom = this.$refs['btn-ref']
      console.log('getBtnDom', getBtnDom)
      console.log('getBtnRefDom', getBtnRefDom)

      const getPeopleDom = document.getElementById('people-dom')
      const getPeopleRefDom = this.$refs['people-ref']
      console.log('getPeopleDom', getPeopleDom)
      console.log('getPeopleRefDom', getPeopleRefDom)
    }
  }
}

/*
  1.被用来给元素或子组件注册引用信息(id的替代者)
  2.应用在html标签上获取的是真实的DOM元素，应用在组件标签上是组件实例对象(vc)
  3.使用方式:
    打标识: <h1 ref="xxx">...</h1> 或 <School ref="xxx" />
    获取: this.$ref.xxx
*/
</script>
