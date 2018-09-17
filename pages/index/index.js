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
      url: 'https://design.zhengsj.top/api/picture_manage/carousel_list',
      method: "GET",
      success: function (res) {
        console.log(res)
      }
    });
    wx.request({
      url: 'https://design.zhengsj.top/api/find/square/<0>',
      method: "GET",
      success: function (res) {
        console.log(res)
      }
    });
  },
  changeType:function(e){
    this.setData({
      nowId:e.currentTarget.id
    })
    console.log(this.data.nowId)
  }
})