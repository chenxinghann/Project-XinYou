// pages/seeMessage/seeMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer:'',
    excontent:{},
    exchole:{}

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
    
    //获取精确树洞信息
    wx.getStorage({
      key: 'exchole',
      success:function(res){
        that.setData({exchole:res.data})
        console.log(res)
      }
    })
    //获取别人留言内容
    wx.getStorage({
      key: 'excmessage',
      success:function(res){
        console.log(res)
        that.setData({excontent:res.data})
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

  //获取回复内容
  answertxt:function(e){
   // console.log(e.detail.value)
    this.setData({answer:e.detail.value})

  },
  //提交留言
  send:function(){
    //存回复内容
    // wx.setStorage({
    //   data: this.data.answer,
    //   key: 'answer',
    // })
    console.log(this.data)
    //传给后端回复相关信息、
    wx.request({
      url: 'http://10.7.86.184:1111/tree/messageanswer',
      header: { 'Content-Type': 'application/json' },
      data:{
        treeid:Number(this.data.exchole.treeid),
        userid:Number(this.data.excontent.userid),
        messagecontentid:Number(this.data.excontent.messagecontentid),
        answer:this.data.answer,
      },
      method:'post',
        success:function (res) { 
          console.log('洞主回复留言数据传递成功！')

       }

    })
    wx.showToast({
      title: '回复成功',
    })
  }
})