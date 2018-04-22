const app = getApp()

Page({
  data:{
    peter: "LOVE",
    sysInfo:{},
    imageSrc: ""
  },
  onLoad: function(e){
    wx.getSystemInfo({
      success: res => {
        this.setData({
          sysInfo: res
        })
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })

  },
  showToastr: function(e){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  showModal:function(e){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  callPhoto: function(e){

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: res=> {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        this.setData({
          imageSrc: res.tempFilePaths
        })
        
      }
    })
  }
})