Page({

  data: {
    images: [],
    sorts:[
      "1232",
      "213123",
      "2131",
      "1232",
      "213123",
      "2131",
      "1232",
      "213123",
      "2131"
    ],
    img_hight:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://cavy.helloyzy.cn/api/categories/',
      method: "GET",
      success: function (res) {
        console.log(res.data.data.categories[0].image_url);
        that.setData({
          images: res.data.data.categories
        })
      }
    });
    // wx.request({
    //   url: 'https://design.zhengsj.top/api/find/square/1',
    //   method: "GET",
    //   success: function (res) {
    //     console.log(res)
    //   }
    // });
    wx.getImageInfo({
      src: '../../img/1.jpg',
      success:function(res){
        that.setData({
          img_hight:330/res.width*res.height+'rpx'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})