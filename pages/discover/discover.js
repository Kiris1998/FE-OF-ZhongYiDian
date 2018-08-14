Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_height:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  addAWork:function(){
    wx.navigateTo({
      url: '../add/add',
    })
  }

})