// pages/care/care.js
const util = require('../../utils/util.js')
var app = getApp()
var page = 1
var category = 'health'
var news_headlines = 'top-headlines?category=' + category
var news_everything = 'everything?q=' + category
var data = []

Page({
  data: {
    data: [],

  },
  onLoad: function(e) {
    var that = this

    var api = app.globalData.newsapi + news_everything +
      '&pageSize=' + app.globalData.page_size + '&page=' +
      page + '&apiKey=' + app.globalData.newsapi_key

    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()
        if (res.data.status === 'ok') {
          var one_item = res.data.articles[0]
          console.log(one_item)

          res.data.articles.map(function(item) {
            if (item.source.name != 'The New York Times') {
              data.push(item)
            }
          })

          that.setData({
            data: data
          })
        } else {
          console.log('failed to load from news api')
        }
      }
    })

  },
  onPullDownRefresh: function() {
    page = 1
    data = []
    console.log('Pull down refresh')
    var that = this

    var api = app.globalData.newsapi + news_everything +
      '&pageSize=' + app.globalData.page_size + '&page=' +
      page + '&apiKey=' + app.globalData.newsapi_key

    wx.showNavigationBarLoading();
    // wx.showLoading({
    //   title: '刷新中',
    // })

    wx.request({
      url: api,
      success(res) {
        // wx.hideLoading()
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
        
        if (res.data.status === 'ok') {
          var one_item = res.data.articles[0]
          console.log(one_item)

          res.data.articles.map(function(item) {
            if (item.source.name != 'The New York Times') {
              data.push(item)
            }
          })

          that.setData({
            data: data
          })
        } else {
          console.log('failed to load from news api')
        }
      }
    })

  },
  onReachBottom: function() {
    page++

    console.log('Load ' + page + ' page')

    var that = this

    var api = app.globalData.newsapi + news_everything +
      '&pageSize=' + app.globalData.page_size + '&page=' +
      page + '&apiKey=' + app.globalData.newsapi_key

    wx.showLoading({
      title: '加载更多',
    })

    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()
        if (res.data.status === 'ok') {
          var one_item = res.data.articles[0]
          console.log(one_item)

          res.data.articles.map(function(item) {
            if (item.source.name != 'The New York Times') {
              data.push(item)
            }
          })

          that.setData({
            data: data
          })
        } else {
          console.log('failed to load from news api')
        }
      }
    })
  }
});