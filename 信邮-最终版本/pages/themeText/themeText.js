// pages/themeText/themeText.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lettertcolor: [],
    lettertstyle: [],
    exccolor: '',
    excstyle: '',
    fontid: '',
    // tab切换  
    currentTab: 0,
    bgcolor: "black",

  },
  switchNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },
  swiperChange: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },

  //选择颜色
  choosecolor: function (e) {
    var exccolor = e.currentTarget.dataset.color;
    this.setData({ exccolor: exccolor })

  },
  //选择字体样式/id
  choosestyle: function (e) {
    var excstyle = e.currentTarget.dataset.style;
    var excfontid = e.currentTarget.dataset.id;
    console.log(e.currentTarget.dataset)
    this.setData({ excstyle: excstyle })
    this.setData({ excfontid: excfontid })
  },
  //点击字体颜色确定按钮
  colorOk: function () {
    wx.setStorage({
      data: this.data.exccolor,
      key: 'txtColor',
    })

    wx.showToast({
      title: '选择成功',
    })
  },
  //点击字体样式确定按钮
  styleOk: function () {
    wx.setStorage({
      data: this.data.excstyle,
      key: 'txtStyle',
    })
    wx.setStorage({
      data: this.data.excfontid,
      key: 'txtfontid',
    })

    wx.showToast({
      title: '选择成功',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取字体颜色
    var that = this;
    wx.request({
      url: 'http://10.7.86.184:1111/timeletter/lettertcolor',
      header: { 'Content-Type': 'application/json' },
      method: 'get',
      success: function (res) {
        console.log(res.data.data);
        that.setData({ lettertcolor: res.data.data })
      }
    })
    //获取字体样式
    wx.request({
      url: 'http://10.7.86.184:1111/timeletter/lettertstyle',
      header: { 'Content-Type': 'application/json' },
      method: 'get',
      success: function (res) {
        console.log(res.data.data);
        that.setData({ lettertstyle: res.data.data })
        wx.setStorage({
          data: res.data.data,
          key: 'letterstyle',
        })
      }
    })



    // console.log(this.data)
    // wx.setStorage({
    //   data: this.data.bgcolor,
    //   key: 'txtColor',
    // })

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