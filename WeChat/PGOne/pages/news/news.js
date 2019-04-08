// pages/news/news.js
var app = getApp()
var page = 1
var category = [
  'top', 'shehui', 'guonei', 'guoji', 'yule', 'tiyu', 'junshi', 'keji', 'caijing', 'shishang'
]

var data = []

Page({
  data: {
    data: []
  },
  onLoad: function(options) {
    var that = this

    //http://v.juhe.cn/toutiao/index?type=top&key=a88e61a44a0a9606e75d886e3ba1746e
    var api = app.globalData.juhe_api + '?type=shehui&key=' + app.globalData.juhe_apiKey

    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()
        if (res.data.error_code == 0) {
          that.setData({
            data: res.data.result.data
          })
        }
      }
    })
  },
  goPage: function(e) {
    var url = e.currentTarget.dataset.url
    wx.setStorageSync("url", url)
    wx.navigateTo({
      url: 'page',
    })
  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})