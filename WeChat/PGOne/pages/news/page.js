// pages/news/page.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
var api = app.globalData.showapi_newspage_api
var app_id = app.globalData.showapi_newspage_app_id
var app_key = app.globalData.showapi_newspage_app_key

Page({
  data: {
    news: null
  },
  onLoad: function(options) {
    var url = wx.getStorageSync("url")
    console.log(url)

    var that = this

    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: api,
      method: 'POST',
      data: {
        showapi_appid: app_id,
        showapi_sign: app_key,
        url: url
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        wx.hideLoading()
        console.log(res.data.showapi_res_body)

        WxParse.wxParse('content', 'html', res.data.showapi_res_body.html, that, 5);

        var news = {
          content: that.data.content,
          date: res.data.showapi_res_body.time,
          title: res.data.showapi_res_body.title
        }

        that.setData({
          news: news
        })
      }

    })

    /*
    var api = app.globalData.url2io_api + '?token=' + app.globalData.url2io_key + '&url=' + url
    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()
        // console.log(res.data)
        WxParse.wxParse('content', 'html', res.data.content, that, 5);
        var news = {
          content: that.data.content,
          date: res.data.date,
          title: res.data.title,
          url: res.data.url
        }

        that.setData({
          news: news
        })
      }
    })
    */

  }
})