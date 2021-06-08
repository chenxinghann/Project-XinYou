// pages/InformationHome/informationHome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exchole:{},
    excmean:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'exchole',
      success:function(res){
        that.setData({
          exchole:res.data
        })
      }
    })
    console.log(this.data)

    //拉去后台个人资料数据
    wx.request({
      url: 'http://10.7.86.184:1111/friend/user',
      // url: 'http://localhost:1111/friend/user',
      header: { 'Content-Type': 'application/json' },
      method:'get',
        success:function (res) { 
          console.log(res)
          var meansdata = res.data.data;
          meansdata.map(item=>{
            if(item.uid===that.data.exchole.treeid){
              that.setData({excmean:item})
            }
          })
       }
    })
    console.log(this.data)

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

  }
})