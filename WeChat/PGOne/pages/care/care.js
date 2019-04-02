// pages/care/care.js
const util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    message: 'Love me',
    data: [],

  },

  onLoad:function(e){
    var that = this
    var api = app.globalData.todaynews_api + '?category=news_hot'
    var data = []

    wx.request({
      url: api,
      success(res) {
        var one_item = JSON.parse(res.data.data[0].content)
        console.log(one_item)

        // new Date(log)
        res.data.data.forEach(item=>{
          var itemObj = JSON.parse(item.content)
          var dataItem = {
            item_id: itemObj.item_id,
            title: itemObj.share_info.title,
            media_info: itemObj.media_info,
            media_name: itemObj.media_name,
            user_info:itemObj.user_info,
            abstract: itemObj.abstract,
            article_url: itemObj.article_url,
            display_url: itemObj.display_url,
            keywords: itemObj.keywords,
            publish_time: itemObj.publish_time
          }

          data.push(dataItem)
        })

        console.log(data)
        that.setData({
          data: data
        })
      }
    })

  }
});
