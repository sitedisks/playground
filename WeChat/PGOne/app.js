//app.js
App({
  onLaunch: function() {

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
    //toutiao
    todaynews_api: 'https://is.snssdk.com/api/news/feed/v51/',
    //juhe: http://v.juhe.cn/toutiao/index?type=top&key=a88e61a44a0a9606e75d886e3ba1746e
    juhe_apiKey: 'a88e61a44a0a9606e75d886e3ba1746e',
    juhe_api: 'https://v.juhe.cn/toutiao/index',
    //newsapi.org: https://newsapi.org/v2/everything?q=health&pageSize=40&page=1&apiKey=60b923e5e58c4b9d88122c0a9d2ad60b
    newsapi_key: '60b923e5e58c4b9d88122c0a9d2ad60b',
    newsapi: 'https://newsapi.org/v2/',
    azure_dev_api: 'https://hp-app-api-dev.azurewebsites.net/Search/practice',
    //showapi post
    showapi_disease_app_id: 91308,
    showapi_disease_app_key: 'c22eef52c48b401eae9435e3f2af4acd',
    showapi_disease_type_list: 'https://route.showapi.com/546-1',
    showapi_search_disease: 'https://route.showapi.com/546-2',
    showapi_disease_detail: 'https://route.showapi.com/546-3',
    showapi_newspage_app_id: 91490,
    showapi_newspage_app_key: '1f6dc1d7815b4ca4a0871576915f2f46',
    showapi_newspage_api: 'http://route.showapi.com/883-1',
    //ccbde.cn: get http://www.ccbde.cn:80/api/521/news
    ccbde_key: '26480968218db442a88df58a1e83021fe',
    ccbde_api: 'https://www.ccbde.cn:80/api/521/news',
    //ip138.com get https://api.ip138.com/text/?url=https://www.gamersky.com/news/201904/1170669.shtml&type=2&token=f6b48bc314a98506b1a091ca50b3e100
    ip138_key: 'f6b48bc314a98506b1a091ca50b3e100',
    ip138_api: 'https://api.ip138.com/',
    //URL2io: http://api.url2io.com/article?token=shKZWrxnRaGdXEi-9QiavQ&url=https://www.gamersky.com/ent/201904/1170349.shtml
    url2io_key:'shKZWrxnRaGdXEi-9QiavQ',
    url2io_api: 'http://api.url2io.com/article'
  }
})