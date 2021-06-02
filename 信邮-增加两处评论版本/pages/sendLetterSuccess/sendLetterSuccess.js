// pages/sendLetterSuccess/sendLetterSuccess.js
var util = require('../../utils/util.js')
var arra = []
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
    
    //定时
    setInterval(function() {
      var time = util.formatTime(new Date());
      var timearr = time.split(' ')
      var day = timearr[0].split('/');
      // console.log(day);
      var times = timearr[1].split(':');
      //console.log(times)
      var time1 = day.concat(times)
      time1 = time1.slice(0,5)
      var ntime = time1.join('')
     // console.log(ntime)///年月日时分 数组形式
      wx.getStorage({
        key: 'timeletters',
        success:function(res){
          console.log(res.data)
          res.data.map(item=>{
            console.log("*****",item)
            var t = item.lettertime
            t = t.split(' ')
            var day1 = t[0].split('-');
            var time = t[1].split(':');
            var time2 = day1.concat(time);
            var stime = time2.join('')
          // console.log(stime)////字符串形式的时光信预定时间
            if(stime===ntime){
              arra.push(item)
            }
          })  
          wx.setStorage({
            data: arra,
            key: 'nowletter',
          })
          console.log(arra)
          
        }
      })      
   }, 60000);

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

  //跳转页面
  goIndex:function(){
    wx.redirectTo({
      url: '../shouye/shouye',
    })
  }
})