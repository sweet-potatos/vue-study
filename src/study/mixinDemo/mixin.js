export const mixinTest = {
  data() {
    return {
      x: 100,
      y: 200
    }
  },
  methods: {
    showName() {
      console.log('name', this.name)
      console.log('对应的data', this)
    }
  }
}
