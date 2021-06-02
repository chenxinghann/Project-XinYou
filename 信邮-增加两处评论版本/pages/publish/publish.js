// pages/publish/publish.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishimg: "",
    uid:'',
    uname:'',
    uimg:'',
    publishcontent:'',
    time:''


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取用户id
    wx.getStorage({
      key: 'uid',
      success:function(res){
        that.setData({uid:res.data})
      }
    })
    //获取用户信息
    const app  = getApp();
    var userInfo = app.globalData.userInfo;
    this.setData({uname:userInfo.nickName})
    this.setData({uimg:userInfo.avatarUrl})

    

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

  },

  ///朋友圈上传本机本地图片
  getimg: function () {
    var that =this;
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      success: res => {
        wx.uploadFile({
          url: 'http://10.7.86.184:1111/upload',
          filePath:res.tempFilePaths[0],
          name: 'media', 
          method:'post',
          success: res => { // 上传成功后的代码
            //获取图片路径
             var imgsrc = "http://10.7.86.184:1111/static/images/"+res.data
             that.setData({publishimg:imgsrc})
        
          }
        })
      }
    });
  },

  //获取发动态的文字内容
  getvalue:function(res){
    this.setData({publishcontent:res.detail.value})
  },

  //发布动态按钮
  gopbulish:function(){
    var time = util.formatTime(new Date());
    console.log(time)
    this.setData({
      time:time,
    })

    //将准备要发的动态信息传输到后端
    wx.request({
      url: 'http://10.7.86.184:1111/friend/publish',
      header: { 'Content-Type': 'application/json' },
      data:{
        time:this.data.time,
        uid:this.data.uid,
        uimg:this.data.uimg,
        uname:this.data.uname,
        publishcontent:this.data.publishcontent,
        publishimg:this.data.publishimg
      },
      method:'post',
        success:function (res) {
          console.log("发朋友圈动态数据传向后端成功！")
        }
    })

    wx.showToast({
      title: '发布成功',
    })

    wx.switchTab({
      url: '../information/information',
    })
  }
})