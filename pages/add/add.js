const app = getApp();
var flag = true;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: ['教材', '教辅', '兴趣','技术'],
    index:0,
    imgSrc:'',
    name:'',
    description:''
  },
  onUnload:function(){
    this.setData({
      imgSrc:''
    })
  },
  selectType:function(e){
    this.setData({
      index:parseInt(e.detail.value)
    })
  },
  chooseImg:function(){
    let that = this
    wx.chooseImage({
      count:1,
      sourceType:['album'],
      success: function(res) {
        app.globalData.imgSrc = res.tempFilePaths
        that.setData({
          imgSrc: app.globalData.imgSrc
        })
      },
    })
  },
  name:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  description:function(e)
  {
    this.setData({
      description:e.detail.value
    })
  },
  addWork:function()
  {
    
    if(!this.data.imgSrc)
    {
      wx.showToast({
        title: '请点击相机拍摄书籍',
        icon:'none',
        duration:1500
      })
    }
    let that = this;
    if(flag)
    {
      flag = false;
      setTimeout(function(){
        flag = true;
      },5000);
      wx.uploadFile({
        url: 'https://cavy.helloyzy.cn/api/book/',
        filePath: this.data.imgSrc,
        header: {
          'Authorization': app.globalData.jwt_token,
        },
        name: 'img',
        formData: {
          name: that.data.name,
          original_price: that.data.originPrice,
          price: that.data.newPrice,
          category_id: that.data.index + 1,
          description: that.data.description
        },
        success: function (res) {
          if (res.statusCode == 200) {
            wx.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 2000,
              mask: true,
              complete: function (res) {
                setTimeout(function () {
                  wx.switchTab({
                    url: '../index/index',
                  })
                }, 2000)
              },
            })
          }
          else {
            console.log(res);
            wx.showToast({
              title: '上传失败',
              icon: 'none',
              duration: 2000,
              mask: true,
              complete: function (res) {
                setTimeout(function () {
                  wx.switchTab({
                    url: '../index/index',
                  })
                }, 2000)
              },
            })
            console.log(that.data);

          }
        }
      })
    }
    
  }
})