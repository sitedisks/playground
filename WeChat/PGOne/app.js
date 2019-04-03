//app.js
App({
  onLaunch: function () {

    // show tabBar red dot
    wx.showTabBarRedDot({
      index: (0),
    })

    // set tabBar badge
    wx.setTabBarBadge({
      index: 2,
      text: 'new'
    })

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    page_size: 20,
    todaynews_api: 'http://is.snssdk.com/api/news/feed/v51/',
    //juhe: http://v.juhe.cn/toutiao/index?type=top&key=a88e61a44a0a9606e75d886e3ba1746e
    juhe_apiKey: 'a88e61a44a0a9606e75d886e3ba1746e',
    juhe_api: 'http://v.juhe.cn/toutiao/index',
    //newsapi.org: https://newsapi.org/v2/everything?q=health&pageSize=40&page=1&apiKey=60b923e5e58c4b9d88122c0a9d2ad60b
    newsapi_key: '60b923e5e58c4b9d88122c0a9d2ad60b',
    newsapi: 'https://newsapi.org/v2/'
 

  }
})