const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{
      isLove: true,
      isDiscover:true
    }
    
  },
  onLoad:function(){
    wx.request({
      url: 'https://design.zhengsj.top/api/find/square/1',
      method:'GET',
      header:{
        'Authorization': app.globalData.token
      },
      success:function(res){
        console.log(res)
      }
    })
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
      isLove:!this.data.data.isLove
    })
  }
})