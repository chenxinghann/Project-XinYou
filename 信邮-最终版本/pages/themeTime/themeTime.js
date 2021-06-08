// pages/themeTime/themeTime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'',
    time:'',
    times:''
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
//获取日期，时间
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  //保存按钮保存的日期和时间
  goSave:function(e){
    var times = this.data.date + " " + this.data.time;
    this.setData({times:times})
    console.log("获取到的日历日期为",this.data.date);
    console.log("获取到的时间为",this.data.time);
    console.log(this.data)
    wx.setStorage({
            data: times,
            key: 'times',
          })
    wx.showToast({
      title: '保存成功',
    })
  },
//   dianji:function(e){
//     var excimg = e.currentTarget.dataset.value;
//     console.log(excimg)
//     wx.setStorage({
//       data: excimg,
//       key: 'excimg',
//     })
// }
})
