<template>
  <li>
    <label>
      <input type="checkbox" :checked="listItem.isChecked" @change="itemChoose(listItem.id)">
      <!-- 用v-model也能实现，但是不建议这样搞，原则上数据在自己组件中才用v-model，props传进来的数据原则上是只读的 -->
      <!-- <input v-model="listItem.isChecked" type="checkbox"> -->
      <span>{{ listItem.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(listItem.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['listItem', 'choose', 'handleDelete'],
  // props: {
  //   listItem: Object
  // }
  methods: {
    itemChoose(id) {
      this.choose(id)
    }
  }
}
</script>

<style scoped lang='less'>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #eee;
    button {
      display: block
    }
  }
</style>
