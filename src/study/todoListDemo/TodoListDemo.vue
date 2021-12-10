<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :add-method="add" />
      <MyList :list-data="listData" :choose="choose" :handle-delete="handleDelete" />
      <MyFooter :list-data="listData" :check-all="checkAll" :clear-is-checked="clearIsChecked" />
    </div>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
import MyHeader from './MyHeader.vue'
import MyList from './MyList.vue'
import MyFooter from './MyFooter.vue'

export default {
  name: 'TodoListDemo',
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      listData: [
        { id: nanoid(), title: '做表格', isChecked: true },
        { id: nanoid(), title: '对接口', isChecked: false },
        { id: nanoid(), title: '联调测试', isChecked: false }
      ]
    }
  },
  methods: {
    add(dataObj) {
      this.listData.unshift(dataObj)
    },
    choose(id) {
      this.listData.forEach(item => {
        if (item.id === id) {
          item.isChecked = !item.isChecked
        }
      })
    },
    handleDelete(id) {
      this.listData = this.listData.filter(item => item.id !== id)
    },
    checkAll(value) {
      this.listData = this.listData.map(item => ({ ...item, isChecked: value }))
    },
    clearIsChecked() {
      this.listData = this.listData.filter(item => !item.isChecked)
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
