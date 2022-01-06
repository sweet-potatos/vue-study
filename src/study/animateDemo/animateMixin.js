export const animateMixin = {
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    changeIsShow() {
      this.isShow = !this.isShow
    }
  }
}
