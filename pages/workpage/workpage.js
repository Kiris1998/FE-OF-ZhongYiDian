// pages/work/work.js
Page({
  data: {
    theTouchImg:true,
    scale: 3,
    imageskey:[
      {
        id: 1,
        x: 10,
        y: 10,
        img: '/img/1.jpg',
      },
      {
        id: 2,
        x: 100,
        y: 20,
        img: '/img/2.jpg',
      },
      {
        id: 3,
        x: 30,
        y: 130,
        img: '/img/3.jpg',
      }
    ]
  },
  onLoad:function(){
    var t = {
      currentTarget: {
        dataset: {
          id: 1
        }
      }
    };
    this.ShowImage(t);
  },
  ShowImage: function (t){
    var e = t.currentTarget.dataset.id;
    this.setData({
      now_tab: e
    });
  },
  
  addPicture:function(){
    var self = this;
    wx.chooseImage({
      count:1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        self.setData({
          tempFilePaths: res.tempFilePaths
          
        })
        console.log(res.tempFilePaths)
        wx.chooseImage({
          success: function (res) {
           
            wx.uploadFile({
              url: 'https://oss–cn–beijing.aliyuncs.com', //仅为示例，非真实的接口地址
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                'user': 'test'
              },
              success: function (res) {
                var data = res.data
                //do something
                console.log(res.data)
              }
            })
          }
        })
      }
    })
  }
})