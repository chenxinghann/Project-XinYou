// pages/myLetter/myLetter.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    letter: [],
    themes: [],
    imgdata: [],
    letterstyles: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    wx.request({
      url: 'http://10.7.86.184:1111/timeletter/timeletter',
      header: { 'Content-Type': 'application/json' },
      // data:{
      //   img:''
      // },
      method: 'get',
      success: function (res) {
        console.log(res.data);
        res.data.data.map(item => {
          item.backimg = "http://10.7.86.184:1111/static/img/backimg/" + item.backimgid + '.jpg';
        })

        that.setData({ letterdata: res.data.data })
        console.log(res.data.data)
        wx.setStorage({
          data: res.data.data,
          key: 'letterdata',
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
    
    //获取用户的uid
    wx.getStorage({
      key: 'uid',
      success: function (res) {
        that.setData({ uid: res.data })
        console.log(res.data)
      }
    })
    //获取主题背景图信息
    wx.getStorage({
      key: 'themes',
      success: function (res) {
        that.setData({ themes: res.data })
      }
    })

    wx.getStorage({
      key: 'imgdata',
      success: function (res) {
        that.setData({ imgdata: res.data })
      }
    })

    //获取字体样式信息
    // wx.getStorage({
    //   key: 'letterstyles',
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({ letterstyles: res.data })
    //   }
    // })

    wx.getStorage({
      key: 'nowletter',
      success: function (res) {
        //背景图   
        console.log("@@@@@@@@@", res.data)
        res.data.map(item => {
          that.data.imgdata.map(t => {
            if (item.backimgid === t.backimgid) {
              item.backimg = t.backimg
            }
          })

          //theme
          that.data.themes.map(t => {
            if (item.themeid === t.themeid) {
              item.themecolor = t.themecolor
            }
          })

          ///字体样式
          that.data.letterstyles.map(t => {
            if (item.lettertstyleid === t.lettertstyleid) {
              item.letterstyle = t.lettertstyle
            }
          })
        })
        console.log(res.data)
        that.setData({ letter: res.data })
      }
    })


    //匹配




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