// China
var lat = 23.099994;
var lng = 113.324520;

//Melbourne
// var lat = -37.813611;
// var lng = 144.963056;

Page({
  data: {
    lng: lng,
    lat: lat,
    markers: [{
      iconPath: '/image/location.png',
      id: 0,
      latitude: lat,
      longitude: lng,
      width: 50,
      height: 50,
      callout: {
        content: "   语言：珊珊是不是傻    \n    预计到达时间：10分钟    \n    车牌号：12345",
        //color: "#ffff33",
        fontSize: "16",
        borderRadius: "10",
        bgColor: "#ffffff",
        padding: "10",
        //display: "ALWAYS"
      },
       
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: '#FF0000DD',
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '/image/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  }
})