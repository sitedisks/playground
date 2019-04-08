// pages/medinfo/medinfo.js
var WxParse = require('../../wxParse/wxParse.js');

var app = getApp()
var api = app.globalData.showapi_disease_detail
var app_id = app.globalData.showapi_disease_app_id
var app_key = app.globalData.showapi_disease_app_key

Page({

  /**
   * 页面的初始数据
   */
  data: {
    medi: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.id)
    this.setData({
      id: options.id
    })

    wx.showLoading({
      title: '加载中',
    })

    var that = this

    wx.request({
      url: api,
      method: 'POST',
      data: {
        showapi_appid: app_id,
        showapi_sign: app_key,
        id: options.id
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        wx.hideLoading()
        var item = res.data.showapi_res_body.item
        console.log(item)

        WxParse.wxParse('summary', 'html', item.summary, that, 5);

        var tags = []
        item.tagList.map(function(tag){
          WxParse.wxParse('tag_content', 'html', tag.content, that, 5);
          tags.push({
            content: that.data.tag_content,
            name: tag.name
          })
        })

        var data = {
          ct: item.ct,
          id: item.id,
          name: item.name,
          subTypeId: item.subTypeId,
          subTypeName: item.subTypeName,
          summary: that.data.summary,
          tagList: tags,
          typeId: item.typeId,
          typeName: item.typeName
        }

        that.setData({
          medi: data
        })

      }

    })
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
  onShareAppMessage: function() {

  }
})