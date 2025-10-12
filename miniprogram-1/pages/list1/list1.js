// pages/list1/list1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 字符串
      info:'hello world',
      // 图片
      imgSrc:'http://www.itheima.com/images/logo.png',
      // 运算
      randomNUM: Math.random() *10,   //0~10之间的小数,例如8.95659350894697
      randomNUM1: Math.random().toFixed(2)  //0~1之间的两位小数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})