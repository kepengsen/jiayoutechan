// pages/paymentResult/paymentResult.js
const app = getApp() //获取应用实例
const http = require('../../utils/http.js')
const api = require('../../utils/api.js')
const utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  // 去产品详情
  handleGoProduct(e) {
    console.log(e.detail.id)
    wx.navigateTo({
      url: '../product/product?id=' + e.detail.id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    app.getNetworkStatus() // 检测网络
    console.log(options)
    this.setData({
      order_id:options.order_id || 1
    })
  },

  goPath (e) {
    console.log(e.currentTarget.dataset.url)
    if (e.currentTarget.dataset.url.indexOf('index') > -1) {
      wx.switchTab({
        url: e.currentTarget.dataset.url,
      })
    } else{
      wx.navigateTo({
        url: e.currentTarget.dataset.url,
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(e) {
    if (e.from == "menu") {
      return app.handleShareApp()
    } 
  }
})