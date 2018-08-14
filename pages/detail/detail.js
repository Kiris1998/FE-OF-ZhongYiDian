Page({

  data: {
    sex:'',
    age:'',
    time:'',
    detail:'',
    addr:'',
    methods:'',
    protocol:'',
    needs:''
  },
  inputSex:function(e){
    this.setData({
      sex: e.detail.value
    })
  },
  inputAge: function (e) {
    this.setData({
      age: e.detail.value
    })
  },
  inputTime: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  inputDetail: function (e) {
    this.setData({
      detail: e.detail.value
    })
  },
  inputAdd: function (e) {
    this.setData({
      addr: e.detail.value
    })
  },
  inputMethods: function (e) {
    this.setData({
      methods: e.detail.value
    })
  },
  inputProt: function (e) {
    this.setData({
      protocol: e.detail.value
    })
  },
  inputNeeds: function (e) {
    this.setData({
      needs: e.detail.value
    })
    console.log(this.data);
  },
  add:function(){
    let arr = this.data;
    let flag = true;
    Object.keys(arr).forEach(function(key){
      flag = flag && arr[key];
    })
    if(flag){
      wx.showLoading({
        title: '正在提交',
      })
    }else{
      wx.showModal({
        title: '温馨提示',
        content: '您的信息不够完整',
      })
    }
    
  }
})