// pages/mine/mine.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uimg:'',
    uname:'',
    //userInfo:{},
    uid:'',
    exchole:{},
    user:{}
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  toChange: function () {
    wx.navigateTo({
      url: '../changeMyData/changeMyData',
    })
  },
  toStore: function () {
    wx.navigateTo({
      url: '../store/store',
    })
  },
  toFavorite:function(){
    wx.navigateTo({
      url: '../myFavorite/myFavorite',
    })
  },
  shudong: function () {
    //获取该用户uid
    var that = this;
    wx.getStorage({
      key: 'uid',
      success:function(res){
        that.setData({uid:res.data})
      }
    })
    
    //判断
    wx.getStorage({
      key: 'treedate',
      success:function(res){
       var uidd = res.data.uid
       res.data.map(item=>{
         if(item.uid===that.data.uid){
           that.setData({exchole:item})
           wx.setStorage({
             data: item,
             key: 'exchole',
           })
         }

       })
      }
    })

    wx.navigateTo({
      url: '../goIntoTree/goIntoTree',
    })

  },

  toMyHoleList:function(res){
    wx.navigateTo({
      url: '../myHoleList/myHoleList',
    })
  },

  gogogo:function(res){
  console.log(this.data.user)
  },
  toMyLetterList: function () {
    wx.navigateTo({
      url: '../myLetter/myLetter',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'uid',
      success:function(res){
        console.log(res)
        that.setData({uid:res.data})
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
    var that = this;
    wx.request({
      url: 'http://10.7.86.184:1111/friend/user',
      // url: 'http://localhost:1111/friend/user',
      header: { 'Content-Type': 'application/json' },
      method:'get',
        success:function (res) {
          console.log(res.data.data)
          res.data.data.map(item=>{
            // console.log(that.data.uid)
            if(that.data.uid===item.uid){
              console.log(item) 
              that.setData({user:item})
            }
          })        
        }
    })  
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