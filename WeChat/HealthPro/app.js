//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('login: ' + res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // 返回 小程序已经向用户请求过的权限
        // res.authSetting['scope.userInfo']
        // res.authSetting['scope.userLocation']

        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              console.log('iv: ' + res.iv)
              console.log('signature: ' + res.signature)
              console.log('avatarUrl: ' + res.userInfo.avatarUrl)
              console.log('city: ' + res.userInfo.city)
              console.log('country: ' + res.userInfo.country)
              console.log('gender: ' + res.userInfo.gender)
              console.log('language: '+ res.userInfo.language)
              console.log('nick name: ' + res.userInfo.nickName)
              console.log('province: ' + res.userInfo.province)

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
    userInfo: null
  }
})