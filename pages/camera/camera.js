const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ctx = wx.createCameraContext();
  },
  takePhoto:function(){
    let that = this;
    this.ctx.takePhoto({
      quality:"high",
      success:(res)=>{
        console.log(res);
        app.globalData.imgSrc = res.tempImagePath;
        that.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  finish:function(){
    wx.navigateBack({
    })
  }
 
})