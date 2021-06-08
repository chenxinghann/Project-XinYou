// pages/stamp/stamp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stamp:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'http://10.7.86.184:1111/tree/stamp',
      header: { 'Content-Type': 'application/json' },
      // data:{
      //   stamp:''
      // },
      method:'get',
        success:function (res) {

          res.data.data.map(item=>{
            item.stamp = "http://10.7.86.184:1111/static/img/stamp/"+item.stamp;
          })
          that.setData({stamp:res.data.data})
         
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

  //选择邮票
  dianji:function(e){
    //console.log(e.currentTarget.dataset.value)
    wx.setStorage({
      data: e.currentTarget.dataset.value,
      key: 'excstamp',
    })
    //弹框显示更改成功
    wx.showToast({
      title: '更改成功',
    })

  }
})