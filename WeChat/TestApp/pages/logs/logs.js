//logs.js
const util = require('../../utils/util.js')
var i = 0
var app = getApp()

Page({
  data: {
    temp: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    logs: [],
    duration: 2000,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    loading: false,
    plain: false
  },
  onLoad: function() {

    console.log('蓝牙模块当前版本是否可用：', wx.canIUse('openBluetoothAdapter'))

    console.log('获取系统屏幕宽度当前版本是否可用：', wx.canIUse('getSystemInfo.success.screenWidth'))

    console.log('消息提示框自定义图标当前版本是否可用：', wx.canIUse('showToast.object.image'))
 


    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        i++
        return util.formatTime(new Date(log))
      })
    })

    console.log(i)

    var that = this
    wx.request({
      url: app.globalData.url_zhihu_api,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          zhihu: res.data.top_stories
        })

      }
    })
  }
})