//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.switchTab({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // set navigation bar title
    wx.setNavigationBarTitle({
      title: '用心',
    })

    // set top bar text
    wx.setTopBarText({
      text: 'This is the topbar text'
    })

    // set background color
    wx.setBackgroundColor({
      backgroundColor: '#ff0000', // 窗口的背景色为白色
    })

    wx.setBackgroundColor({
      backgroundColorTop: '#ff0000', // 顶部窗口的背景色为白色
      backgroundColorBottom: '#ff0000', // 底部窗口的背景色为白色
    })


 

    // local storage 
    const res = wx.getSystemInfoSync()
    console.log('>>>' + res.platform)
    wx.setStorageSync('developer', 'Peter Wang')
    

    // default case:
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReachBottom: function () {
    console.log('Reach bottom')
    wx.showToast({
      title: 'Bottom up',
    })
  },
  onShow:function(){
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease'
    })

    this.animation = animation

    // animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function(){
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this),1500)

  },
  scaleIt(){
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScale() {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate() {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goMe:function(e){
    console.log('go to me')
    wx.vibrateShort({
      success(res){
        console.log('Vibration Good')

      },fail(res){
        console.log('Vibration Bad')
      }
    })

    wx.navigateTo({
      url: '/pages/index/me/me?year=2019&month=03',
    })
   
  }
})
