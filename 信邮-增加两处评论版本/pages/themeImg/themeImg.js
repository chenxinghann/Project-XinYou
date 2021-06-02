// pages/themeImg/themeImg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgdata:[],


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'http://10.7.86.184:1111/timeletter/backimg',
      header: { 'Content-Type': 'application/json' },
      data:{
        img:''
      },
      method:'get',
        success:function (res) {
          console.log(res)
          res.data.map(item=>{
            item.backimg = "http://10.7.86.184:1111/static/img/backimg/"+item.backimg;
          })
          that.setData({imgdata:res.data})
          wx.setStorage({
            data: res.data,
            key: 'imgdata',
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


  /////
  dianji:function(e){
    var backimg = e.currentTarget.dataset.value;
    var backimgid = e.currentTarget.dataset.id;
    wx.setStorage({
      data: backimg,
      key: 'backimg',
    })
    wx.setStorage({
      data: backimgid,
      key: 'backimgid',
    })
    wx.showToast({
      title: '更改成功',
    })

    // var that = this;
    // wx.request({
    //   url: 'http://www.lllh.club:1234/timeletter/backimg',
    //   header: { 'Content-Type': 'application/json' },
    //   data:{
    //     name:this.data.name,
    //     timeId:this.data.timeId,
    //   },
    //   method:'post',
    //     success:function (res) {
     

    //         console.log("123",app.globalData.imgdata)
           
    //         that.setData({
    //           timeId:res
    //         })
       },



    
    })

   


  // } ,
   //获取
  
