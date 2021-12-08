<template>
  <div>
    <p>老师名字: {{ name }}</p>
    <p>老师年龄: {{ age }}</p>
    <p>老师性别: {{ sex }}</p>
    <p>测试修改数值x: {{ copyX }}</p>
    <p>测试修改数值y: {{ y }}</p>
    <button @click="changeX">x++</button>
  </div>
</template>

<script>
export default {
  name: 'Teacher',

  // 简单接收
  // props: ['name', 'age', 'sex']

  // 接收同时对数据类型进行限制
  props: {
    name: String,
    age: Number,
    sex: String,
    x: Number,
    y: Number
  },
  data() {
    return {
      copyX: this.x
    }
  },
  methods: {
    changeX() {
      this.copyX++
    }
  }

  // 接收的同时对数据: 进行类型限制+默认值的指定+必要性的限制
  // props: {
  //   name: {
  //     type: String,
  //     required: true,
  //     default: '小明'
  //   },
  //   age: {
  //     type: Number,
  //     default: 99
  //   },
  //   sex: {
  //     type: String,
  //     required: true
  //   }
  // }

}
</script>
