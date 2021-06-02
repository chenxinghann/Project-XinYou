// pages/aaaceshi/ceshi.js
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
  huoqu: function () {
    var that = this;
    // var appid = 'wx56840c09ca9a9e39';
    // var secret = 'b2636c62ab152eb835e2b91033fde99f';
    var appid = 'wx3155f27af04b2337'
    var secret = '45eaaeaea4517824f749b4f728aa674a'
    wx.request({
      url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`,
      header: { 'Content-Type': 'application/json' },
      // data:{
      //   img:''
      // },
      method: 'get',
      success: function (res) {
        console.log(res.data.access_token)
        // res.data.map(item=>{
        //   item.backimg = "http://www.lllh.club:1234/static/img/backimg/"+item.backimg;
        // })
        // that.setData({imgdata:res.data})

      }
    })

  },


  testSubmit: function (e) {
    var self = this;
    let _access_token = '39_Po4Qn_8X3UeGssz6auryHHlJrerOJWe7ccQeV8njeFOoQbR0myNTxstgEM_PlY8L6VYwUlvWRujw157-tSkA10ccHR3gIYn0zaDCMH472kHSkxRyP4yJjIX5EgFVINcequSggEmTpNEKHmqoXTQfAEADZW';
    let url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _access_token
      ; let _jsonData = {
        access_token: _access_token,
        touser: openid,////需要获取openid在浏览器收藏的页面中（登录过程获取）
        template_id: 'tyT9WPxkv1J38yXfCLxs9nHt4HyVXaKHV7CJfwqMBZo',
        form_id: e.detail.formId,
        page: "pages/shouye/shouye",
        data: {
          "keyword1": { "value": "测试数据一", "color": "#173177" },
          "keyword2": { "value": "测试数据二", "color": "#173177" },
          "keyword3": { "value": "测试数据三", "color": "#173177" },
          "keyword4": { "value": "测试数据四", "color": "#173177" },
        }
      }
    wx.request({
      url: url,
      data: data,
      method: method,
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log('request fail ', err);
      },
      complete: function (res) {
        console.log("request completed!");
      }
    })
  }




})