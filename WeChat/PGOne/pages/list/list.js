// pages/list/list.js
var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    data: []
  },
  refresh: function(e){
    wx.showLoading({
      title: '加载中',
    })

    var that = this
    var api = app.globalData.azure_dev_api
    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()
        console.log(res.data[0])
        that.setData({
          data: res.data
        })
      }
    })
  },
  onLoad: function(e) {
    wx.showLoading({
      title: '加载中',
    })

    var that = this
    var api = app.globalData.azure_dev_api
    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()
        console.log(res.data[0])
        that.setData({
          data: res.data
        })
      }
    })
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  searchInput: function(e) {
    wx.showLoading({
      title: '查询中',
    })
    // start api search
    // page and pageSize?
    var that = this
    var api = app.globalData.azure_dev_api + '?Name=' + this.data.inputVal

    wx.request({
      url: api,
      success(res) {
        wx.hideLoading()

        if (res.data.length > 0) {
          that.setData({
            data: res.data
          })
          that.setData({
            inputVal: "",
            inputShowed: false
          })
        } else {
          wx.showToast({
            title: '没有搜索结果',
            icon: 'none',
            duration: 3000
          });
          that.setData({
            inputVal: "",
            data: []
          })
        }
      }
    })
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  goItem: function(e) {
    var item = e.currentTarget.dataset.item
    wx.setStorageSync("item", item)
    wx.navigateTo({
      url: '../item/item',
    })
  }
});