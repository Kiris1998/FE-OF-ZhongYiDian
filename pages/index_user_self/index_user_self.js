//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    fans_number:0,
    stars_number:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    identity:'User',
    star:'关注',
    select:0,
    ischecked:0,
    img_hight: '',
    role:'',
    name:'',
    followed:null,
    followers:null
  },
  onLoad: function () {
    var that = this;
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        name:app.globalData.userInfo.nickName,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          name: res.userInfo.nickName,
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
            name: res.userInfo.nickName,
            hasUserInfo: true
          })
        }
      })
    }
    //获取用户信息
    wx.request({
      url: "https://design.zhengsj.top/api/user/" + app.globalData.uid,
      method: "GET",
      data: {
        uid: app.globalData.uid
      },
      header:{
        'content-type': 'application/json', // 默认值
        'Authorization':app.globalData.token
      },
      success: function (res) {
        //console.log(res.data.data.role=='User')
        //console.log('submit success')
        //console.log(res.data)
        that.setData({
          role:res.data.data.role,
          followed:res.data.data.followed,
          followers:res.data.data.followers,
        })
        if(res.data.data.avatarUrl){
          that.setData({
            imgUrl:res.data.data.avatarUrl
          })
        }
        if (res.data.data.name){
          that.setData({
            name:res.data.data.name
          })
        }
      },
      fail: function () {
        console.log('submit fail')
      }
    })
    //获取用户粉丝列表
    wx.request({
      url: "https://design.zhengsj.top/api/user/followers/list",
      method:"GET",
      header:{
        'Authorization': app.globalData.token
      },
      data:{
        
      },
      success:function(res){
        that.setData({
          fans_number: res.data.follower_count
        })
      }
    })
    //获取用户关注列表
    wx.request({
      url: "https://design.zhengsj.top/api/user/followed/list",
      method: "GET",
      header: {
        'Authorization': app.globalData.token
      },
      data: {

      },
      success: function (res) {
        that.setData({
          stars_number: res.data.followed_count
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
  toOrder:function(){
    wx.navigateTo({
      url: '../orders/orders',
    })
  },
  toFans:function(){
    wx.navigateTo({
      url: '../fans/fans',
    })
  },
  toStars:function(){
    wx.navigateTo({
      url: '../stars/stars',
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
  toGallery:function(){
    var that=this;
    that.setData({
      select:0,
      ischecked:0
    })
  },
  toProduction:function(){
    var that = this;
    that.setData({
      select:1,
      ischecked:1
    })
  },
  toPrice: function () {
    var that = this;
    that.setData({
      select: 2,
      ischecked: 2
    })
  },
  setPhoteInfo:function(){
    var that = this;
    wx.chooseImage({
      count:1,
      success: function(res) {
        var tempFilePaths=res.tempFilePaths
        that.setData({
          imgUrl:tempFilePaths
        })
        wx.uploadFile({
          url: "https://design.zhengsj.top/api/user/avatar",
          filePath: tempFilePaths[0],
          name: 'avatarUrl',
          header:{
            'Authorization': app.globalData.token
          },
          formData:{
            avatarUrl:tempFilePaths[0]
          },
          success: function (res) {
            console.log(res.data)
            console.log('submit success')
          }
        })
      },
      fail:function(res){
        console.log(Error)
      }
    })
  },
  changeNickName:function(){
    wx.request({
      url: 'https://design.zhengsj.top/api/user',
      method:'POST',
      
    })
  }
})
