// pages/workdetali/workdetali.js
Page({
  data: {
    comments_key:[
      {
        avatarimg: "/img/avatar/1.png",
        avatarname:"张三",
        avatartime:"2018-8-4 12:00",
        avatardescription:"斯嘉丽约翰逊美呆了~"
      },
      {
        avatarimg: "/img/avatar/2.png",
        avatarname: "李四",
        avatartime: "2018-8-5 14:03",
        avatardescription: "斯嘉丽约翰逊太漂亮了~"
      },
      {
        avatarimg: "/img/avatar/3.png",
        avatarname: "王五",
        avatartime: "2018-8-5 17:53",
        avatardescription: "斯嘉丽约翰逊太好看了~"
      },
      {
        avatarimg: "/img/avatar/4.png",
        avatarname: "马六",
        avatartime: "2018-8-5 17:59",
        avatardescription: "斯嘉丽约翰逊太好看了~"
      },
      {
        avatarimg: "/img/avatar/5.png",
        avatarname: "郭七",
        avatartime: "2018-8-5 18:29",
        avatardescription: "斯嘉丽约翰逊哇塞了~"
      }
    ]
  },
  onLoad: function (res) {    
    var self = this
    wx.request({
      // url: 'http://123.207.160.62/comment/comment_list',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
          console.log(res.data);
          // self.setData({
          //   restaurant_list: res.data
          // })
      }
    })
  },
  bindReplaceInput:function(){
    wx.request({
      // url: 'http://123.207.160.62/comment/comment_upload',
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        
      }
    })
  }
})