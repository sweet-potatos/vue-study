<template>
  <div v-if="total" class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="handleCheckAll"> -->
      <input v-model="isAll" type="checkbox">
    </label>
    <span>
      <span>已完成{{ checkedNum }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearIsChecked">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['listData', 'checkAll', 'clearIsChecked'],
  computed: {
    total() {
      return this.listData.length
    },
    checkedNum() {
      if (!this.listData || this.listData.length === 0) return undefined
      const num = this.listData.reduce((pre, current) => {
        return pre + (current.isChecked ? 1 : 0)
      }, 0)
      return num
    },
    isAll: {
      get() {
        return this.total === this.checkedNum && this.total > 0
      },
      set(value) {
        this.checkAll(value)
      }
    }
  },
  methods: {
    handleCheckAll(e) {
      const isCheck = e.target.checked
      this.checkAll(isCheck)
    }
  }
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
