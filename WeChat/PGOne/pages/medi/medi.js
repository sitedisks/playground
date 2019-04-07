// pages/medi/medi.js
var WxParse = require('../../wxParse/wxParse.js');

var app = getApp()
var api = app.globalData.showapi_search_disease
var app_id = app.globalData.showapi_app_id
var app_key = app.globalData.showapi_app_key

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    data: []
  },
  onLoad: function (e) {
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
        typeId: "",
        subTypeId: "",
        key: "",
        page: "1"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      success(res) {
        wx.hideLoading()
        console.log(res.data.showapi_res_body.pagebean.contentlist[0])
        var data = []
        res.data.showapi_res_body.pagebean.contentlist.map(function(item){

          WxParse.wxParse('summary', 'html', item.summary, that, 5);

          data.push({
            id: item.id,
            name: item.name,
            subTypeId: item.subTypeId,
            subTypeName: item.subTypeName,
            summary: that.data.summary,
            typeId: item.typeId,
            typeName: item.typeName
          })
        })

        that.setData({
          data: data
        })
      }

    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  searchInput: function (e) {
    wx.showLoading({
      title: '查询中',
    })

    var that = this

    wx.request({
      url: api,
      method: 'POST',
      data: {
        showapi_appid: app_id,
        showapi_sign: app_key,
        typeId: "",
        subTypeId: "",
        key: this.data.inputVal,
        page: "1"
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success(res) {
        wx.hideLoading()
        console.log(res.data.showapi_res_body.pagebean.contentlist[0])
        var data = []
        res.data.showapi_res_body.pagebean.contentlist.map(function (item) {

          WxParse.wxParse('summary', 'html', item.summary, that, 5);

          data.push({
            id: item.id,
            name: item.name,
            subTypeId: item.subTypeId,
            subTypeName: item.subTypeName,
            summary: that.data.summary,
            typeId: item.typeId,
            typeName: item.typeName
          })
        })

        that.setData({
          data: data
        })
      }

    })
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  goItem: function (e) {
    var medi_id = e.currentTarget.dataset.id
    
    wx.navigateTo({
      url: '../medinfo/medinfo?id=' + medi_id,
    })
  }
});