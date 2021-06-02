// pages/myMessage/myMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    excmessage:{},
    exchole:{},
    id:'',
    answers:[],
    giveanswer:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取进的哪一个自己曾经的留言
    wx.getStorage({
      key: 'excmessage',
      success:function(res){
        that.setData({id:res.data.messagecontentid})
      }
    })
    //从后端获取其他洞主给我的回复
    wx.request({
      url: 'http://10.7.86.184:1111/tree/seeanswer',
      header: { 'Content-Type': 'application/json' },
      method:'get',
        success:function (res) {
          that.setData({answers:res.data.data}) 
          console.log(that.data.id)
          console.log(that.data.answers)
          that.data.answers.map(item=>{
            if(that.data.id===item.messagecontentid){
              that.setData({giveanswer:item})
            }
          })
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
    //获取点击的这个树洞的相关信息
    wx.getStorage({
      key: 'exchole',
      success:function(res){
        console.log(res)
        that.setData({exchole:res.data})
      }
    })
   
    //获取自己在投档记录点击的投档留言内容
    wx.getStorage({
      key: 'excmessage',
      success:function(res){
        that.setData({excmessage:res.data})
        //res.data
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