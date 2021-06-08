// pages/information/information.js
const {resolvingDate} = require("../../utils/util");
Page({
  /**
   * 页面的初始数据
   */
  data: {

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
    var that = this;
    ///后台拉去动态列表
    wx.request({
      // url: 'http://www.lllh.club:1234/friend/publish',
      // url: 'http://10.7.86.184:1111/friend/publish',
      url: 'http://localhost:1111/friend/publish',
      header: { 'Content-Type': 'application/json' },
      method: 'get',
      success: function (res) {
        console.log(res.data)
        res.data.map(item => {
          // item.backimg = "http://10.7.86.184:1111/static/img/backimg/" + item.backimgid + '.jpg';
          item.time = resolvingDate(item.time)
          // console.log(resolvingDate(item.lettertime))
        })
        that.setData({ publishlist: res.data })
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

  //跳转发动态模块
  goout: function () {
    wx.navigateTo({
      url: '../publish/publish',
    })
  },
  //跳转首页
  gohome: function () {
    wx.navigateTo({
      url: '../shouye/shouye',
    })
  },
  //跳转评论
  gosay: function (res) {
    wx.setStorage({
      data: res.currentTarget.dataset.value,
      key: 'excpublish',
    })
    wx.navigateTo({
      url: '../say/say',
    })
  }


})
