// pages/news/news.js
var app = getApp()
var page = 1
var category = [{
    value: 'top',
    name: '头条'
  },
  {
    value: 'shehui',
    name: '社会'
  },
  {
    value: 'guonei',
    name: '国内'
  },
  {
    value: 'guoji',
    name: '国际'
  },
  {
    value: 'yule',
    name: '娱乐'
  },
  {
    value: 'tiyu',
    name: '体育'
  },
  {
    value: 'junshi',
    name: '军事'
  },
  {
    value: 'keji',
    name: '科技'
  },
  {
    value: 'caijing',
    name: '财经'
  }, {
    value: 'shishang',
    name: '时尚'
  }
]

var data = []

Page({
  data: {
    array: category,
    index: 0,
    data: []
  },
  onLoad: function(options) {
    var that = this

    var api = app.globalData.juhe_api + '?type=' + category[0].value + '&key=' + app.globalData.juhe_apiKey

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

  },
  bindPickerChange: function(e) {
    console.log('picker select index: ', e.detail.value)
    console.log(category[e.detail.value])
    this.setData({
      index: e.detail.value
    })

    var that = this

    var api = app.globalData.juhe_api + '?type=' + category[e.detail.value].value + '&key=' + app.globalData.juhe_apiKey

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
})