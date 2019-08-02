var json = [{
  iconPath: '/image/location.png',
  id: 0,
  latitude: lat,
  longitude: lng,
  width: 50,
  height: 50,
  callout: {
    content: "    语言：珊珊是不是傻    \n    预计到达时间：10分钟    \n    车牌号：12345",
    fontSize: "16",
    borderRadius: "10",
    bgColor: "#ffffff",
    padding: "10",
  },
}, {
    iconPath: '/image/location.png',
    id: 1,
    latitude: lat + 0.01,
    longitude: lng - 0.01,
    width: 50,
    height: 50,
    callout: {
      content: "    语言：珊珊是不是傻    \n    预计到达时间：10分钟    \n    车牌号：12345",
      fontSize: "16",
      borderRadius: "10",
      bgColor: "#ffffff",
      padding: "10",
    },
  }]

module.exports = {
  testJsonList: json
}