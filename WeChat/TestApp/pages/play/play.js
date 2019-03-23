const endpoint_dev = 'http://hp-app-api-dev.azurewebsites.net'
const types = ['default', 'primary', 'warn']
const pageObject = {
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    dataLoading: false
  },
  setDisabled(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },
  setPlain(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  loadHPData(e) {

    wx.request({
      
      url: endpoint_dev + '/Search/practice', // 仅为示例，并非真实的接口地址
      data: {
        Postcode: "3000",
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)

        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    })

    
  },
  showLoading(e) {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function() {
      wx.hideLoading()
    }, 2000)
  },
  showModal(e) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  showActionsheet(e) {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

  },

  onGotUserInfo(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)
  },
}

for (let i = 0; i < types.length; ++i) {
  (function(type) {
    pageObject[type] = function(e) {
      const key = type + 'Size'
      const changedData = {}
      changedData[key] =
        this.data[key] === 'default' ? 'mini' : 'default'
      this.setData(changedData)
    }
  }(types[i]))
}

Page(pageObject)