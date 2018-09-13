App({
  globalData: {
    userInfo: null,
    imgSrc: '',
    uid: '',
    token: '',
    avaUrl: '',
  },
  onLaunch: function () {
    var that = this
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({

      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://design.zhengsj.top/api/user/login/',
            method: "POST",
            data: {
              code: res.code
            },
            header: {
              "Content-Type": "application/json"
            },
            success: function (res) {
              console.log(res.data.token)
              that.globalData.token = res.data.token
              that.globalData.uid = res.data.uid;
              console.log('uid='+that.globalData.uid)
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }/*
        wx.request({
          url: "https://design.zhengsj.top/api/user/"+that.globalData.uid,
          method: "GET",
          data: {
            token: that.globalData.token,
            uid: that.globalData.uid
          },
          success: function (res) {
            console.log(res.data)
            console.log('submit success')
          },
          fail: function () {
            console.log('submit fail')
          }
        })*/
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
              //console.log(res.userInfo)
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

})