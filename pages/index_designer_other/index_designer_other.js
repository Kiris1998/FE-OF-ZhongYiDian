//index_designer_other.js
//获取应用实例
const app = getApp()
Page({
  data: {
    fans_number: 7,
    stars_number: 15,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    identity: '设计师',
    star: '关注',
    notStared: true,
    ischecked:0,
    select:0,
    img_hight:''
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
    //处理图片自适应
    let that = this;
    wx.getImageInfo({
      src: '../../img/1.jpg',
      success: function (res) {
        that.setData({
          img_hight: 660 / res.width * res.height + 'rpx'
        })
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toOrder: function () {
    wx.navigateTo({
      url: '../orders/orders',
    })
  },
  toFans: function () {
    wx.navigateTo({
      url: '../fans/fans',
    })
  },
  toStars: function () {
    wx.navigateTo({
      url: '../stars/stars',
    })
  },

  starOrNot: function () {
    var that = this;
    that.setData({
      notStared: (!that.data.notStared)
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: 'TeacherDang\'s Mini Program',
      path: '/pages/index/index'
    }
  },
  toGallery: function () {
    var that = this;
    that.setData({
      select: 0,
      ischecked: 0
    })
  },
  toProduction: function () {
    var that = this;
    that.setData({
      select: 1,
      ischecked: 1
    })
  },
  toPrice: function () {
    var that = this;
    that.setData({
      select: 2,
      ischecked: 2
    })
  }
})
