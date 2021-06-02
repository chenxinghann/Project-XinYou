//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    uid:'',
    userdata:''
  },

   //事件处理函数
   goTime: function() {
    wx.navigateTo({
      url: '../timeLetter/timeLetter'
    })
  },
  goTree:function(){
    wx.navigateTo({
      url: '../tree/tree',
    })
  },
  gologin:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },

  goSelf:function(){
    wx.switchTab({
      url: '../information/information',
    })
  },



  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'uid',
      success:function(res){
        that.setData({uid:res.data})
      }
    })
    //拉去用户信息
    wx.request({
      url: 'http://10.7.86.184:1111/friend/user',
      header: { 'Content-Type': 'application/json' },
      method:'get',
        success:function (res) {
          console.log(res.data.data)
          res.data.data.map(item=>{
            if(that.data.uid===item.uid){
              that.setData({userdata:item})
              wx.setStorage({
                data: item,
                key: 'userdata',
              })
            }
          })
         
        }
    })
        
  },

})
