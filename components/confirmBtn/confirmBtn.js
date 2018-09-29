// components/confirmBtn/confirmBtn.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    btnText: {
      type: String,
      value: '完成',
      observer: 'setBtnText'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    btnText: '完成',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setBtnText(newVal,oldVal) {
      this.setData({
        btnText: newVal
      })
    }
  }
})
