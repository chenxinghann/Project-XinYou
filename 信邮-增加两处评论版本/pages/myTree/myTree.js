// pages/myTree/myTree.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    userimg:'',
    treename:'',
    treecontent:'',
    backimg:'',
    backimgid:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    //获取用户头头像和名称
    var that = this;
    var app = getApp();
    var userdata = app.globalData.userInfo;
    console.log(userdata)
    this.setData({username:userdata.nickName})
    this.setData({userimg:userdata.avatarUrl})
    //this.data.username = userdata.nickName;
   // this.data.userimg = userdata.avatarUrl;

   //获取自己创建的树洞名字和内容
   wx.getStorage({
    key: 'treename',
    success: function(res) {
      console.log(res.data)
      that.setData({treename:res.data})
    } 
  })
  wx.getStorage({
    key: 'treecontent',
    success: function(res) {
      console.log(res.data)
      that.setData({treecontent:res.data})
    } 
  })

  //获取选择的背景图
      //获取图片src
      wx.getStorage({
        key: 'backimg',
        success: function(res) {
          res.data = res.data?res.data:"http://10.7.86.184:1111/static/img/backimg/0.jpg"
          that.setData({backimg:res.data})
        } 
      })
        //获取图片id
        wx.getStorage({
          key: 'backimgid',
          success: function(res) {
            that.setData({backimgid:res.data})
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

  },
  jumpCreateTree:function(){
    // wx.getStorage({
    //   key: 'userInfo',
    //   success: function(res) {
    //     console.log(res)
    //     //that.setData({backimgid:res.data})
    //   } 
    // })
    console.log(this.data)
    wx.navigateTo({
      url: '../createTree/createTree',
    })

  }
})