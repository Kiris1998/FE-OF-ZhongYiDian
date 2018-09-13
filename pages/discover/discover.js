Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLove:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  addWork: function () {
    wx.navigateTo({
      url: '../add/add',
    })
  },
  changeLove:function(){
    this.setData({
      isLove:!this.data.isLove
    })
  }
})