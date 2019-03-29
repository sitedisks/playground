// China
// var lat = 39.0851;
// var lng = 117.19937;
var localData = require('../../data/data.js');

//Melbourne
var lat = -37.813611;
var lng = 144.963056;
var markers = [];

Page({
  data: {
    lng: lng,
    lat: lat,

  },
  onLoad: function(e) {
    console.log('on load')
    //repaire the markers
    var i = 0

    localData.testJsonList.forEach(function(item) {
      markers.push({
        iconPath: '/image/location.png',
        id: i++,
        latitude: item.lat,
        longitude: item.lng,
        width: 50,
        height: 50
      })
    })

    this.setData({
      lat: lat,
      lng: lng,
      markers: markers,

    })

    /*
    var that = this
    wx.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        
        that.setData({
          lat: latitude,
          lng: longitude,
          markers: markers
        });
      }
    })
    */
  },
  refresh: function(e) {
    wx.showToast({
      title: 'Refresh!',
    })
  },
  calling: function(e) {
    wx.showToast({
      title: 'Calling',
    })
  },

  showDetails: function(e) {
    console.log('show modal')
    console.log(e.markerId)

    var details = localData.testJsonList[e.markerId]
    if (details.data_type == 'Practice') {
      this.setData({
        location: details.s_address,
        name: details.s_clinic_name,
        specialties: details.s_specialties,
        phone: details.s_phone
      })
    } else if (details.data_type == 'Practitioner') {
      this.setData({
        location: details.p_location,
        name: details.p_name,
        specialties: details.p_specialties,
        phone: details.s_phone
      })
    }
    

    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()

    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)

  },

  hideDetails: function(e) {
    console.log('hide modal')
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function() {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  }

})