// pages/topic/topic.js
const app = getApp();
Page({
  data:{
    imgUrl:''
  },
  onLoad:function(){
    this.setData({
      imgUrl:app.globalData.avaUrl
    })
  }
})