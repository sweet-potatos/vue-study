<template>
  <li>
    <label>
      <input type="checkbox" :checked="listItem.isChecked" @change="itemChoose(listItem.id)">
      <!-- 用v-model也能实现，但是不建议这样搞，原则上数据在自己组件中才用v-model，props传进来的数据原则上是只读的 -->
      <!-- <input v-model="listItem.isChecked" type="checkbox"> -->
      <span v-show="!listItem.isEdit">{{ listItem.title }}</span>
      <input v-show="listItem.isEdit" ref="inputTitle" type="text" :value="listItem.title" @blur="handleBlur(listItem, $event)">
    </label>
    <button class="btn btn-danger" @click="handleDelete(listItem.id)">删除</button>
    <button v-show="!listItem.isEdit" class="btn btn-edit" @click="handleEdit(listItem)">编辑</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['listItem'],
  // props: {
  //   listItem: Object
  // }
  methods: {
    itemChoose(id) {
      this.$bus.$emit('choose', id)
    },
    handleDelete(id) {
      if (confirm('确定删除吗')) {
        this.$bus.$emit('handleDelete', id)
      }
    },
    handleEdit(listItem) {
      // eslint-disable-next-line no-prototype-builtins
      const isHasEdit = listItem.hasOwnProperty('isEdit')
      if (isHasEdit) {
        listItem.isEdit = true
      } else {
        this.$set(listItem, 'isEdit', true)
      }
      this.$nextTick(function() {
        this.$refs.inputTitle.focus()
      })
    },
    handleBlur(listItem, e) {
      listItem.isEdit = false
      if (!e.target.value.trim()) {
        alert('输入不能为空')
        return undefined
      }
      listItem.title = e.target.value
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
