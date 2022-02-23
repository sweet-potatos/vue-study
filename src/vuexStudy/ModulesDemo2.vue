<template>
  <div>
    <h2>当前的合为{{ sum }}</h2>
    <h2>放大后的合为{{ bigSum }}</h2>

    <input v-model="peopleInfo">
    <button type="button" @click="addPeople">添加</button>
    <button type="button" @click="addSentence">添加语句</button>
    <ul>
      <li v-for="item in peopleList" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default {
  name: 'ModulesDemo2',
  data() {
    return {
      peopleInfo: ''
    }
  },
  computed: {
    sum() {
      return this.$store.state.addCountModule.sum
    },
    bigSum() {
      return this.$store.getters['addCountModule/bigSum']
    },
    peopleList() {
      return this.$store.state.personMoudle.peopleList
    }
  },
  mounted() {
    console.log('this', this)
  },
  methods: {
    addPeople() {
      if (!this.peopleInfo) return undefined
      const addObj = { id: nanoid(), name: this.peopleInfo }
      this.$store.commit('personMoudle/ADD_PERSON', addObj)
      this.peopleInfo = ''
    },

    addSentence() {
      this.$store.dispatch('personMoudle/addSentence')
    }
  }

}
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>
