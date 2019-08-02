// pages/index/me/me.js
var developer = wx.getStorageSync('developer')
Page({

  /**
   * Page initial data
   */
  data: {
    author: developer
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    console.log(options.year + ' ' + options.month)
    // 转入二级页面的 wx.navigateTo and wx.redirectTo 可以带参数并用OPTIONS读取
    // 一级tabbar页面 wx.switchTo 不可以带参数
    // wx.reLaunch可以带参数

    // set navigation bar color
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })

    // show share menu ??
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {
    console.log('Pull down refresh')
    wx.showNavigationBarLoading();

    setTimeout(function() {
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    }.bind(this),1000)

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {
    console.log('Reach bottom')
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})