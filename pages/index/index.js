Page({

  data: {
    images: [],
    sorts:[
      "推荐",
      "颜值",
      "平面设计",
      "摄影", 
      "二次元"
    ],
    img_hight:'',
    nowId:0
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
  changeType:function(e){
    this.setData({
      nowId:e.currentTarget.id
    })
    console.log(this.data.nowId)
  }
})