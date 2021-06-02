// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lettertheme:[],
  //  seetheme:{}
    
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
      //获取时光信主题
      var that = this;
      wx.request({
        url: 'http://10.7.86.184:1111/timeletter/lettertheme',
        header: { 'Content-Type': 'application/json' }, 
        method:'get',
          success:function (res) {
            console.log(res)
            res.data.data.map(item=>{
              item.backimg = "http://10.7.86.184:1111/static/img/backimg/"+item.backimg;
            })
            that.setData({lettertheme:res.data.data})  
            wx.setStorage({
              data: res.data.data,
              key: 'themes',
            })      
          }
      })
      console.log(this.data)
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

  //选择查看主题
  choosetheme:function(e){
    var seetheme = e.currentTarget.dataset;
    console.log(seetheme)
   // this.setData({seetheme:seetheme})
    wx.setStorage({
      data: seetheme,
      key: 'seetheme',
    })
    console.log(e)
    wx.navigateTo({
      url: '../exctheme/exctheme',
    })
  }
})