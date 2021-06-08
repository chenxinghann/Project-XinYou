// pages/seeMessage/seeMessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    answer: '',
    excontent: {},
    exchole: {}
  },

  onShow: function () {
    var that = this;

    //获取精确树洞信息
    wx.getStorage({
      key: 'exchole',
      success: function (res) {
        that.setData({ exchole: res.data })
        console.log(res)
      }
    })
    //获取别人留言内容
    wx.getStorage({
      key: 'excmessage',
      success: function (res) {
        console.log(res.data)
        that.setData({ excontent: res.data })
        // that.setData({excmessage:res.data})
      }
    })
  },

  //获取回复内容
  answertxt: function (e) {
    // console.log(e.detail.value)
    this.setData({ answer: e.detail.value })

  },
  //提交留言
  send: function () {
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
      data: {
        treeid: Number(this.data.exchole.treeid),
        userid: Number(this.data.excontent.messid),
        messagecontentid: Number(this.data.excontent.contentid),
        answer: this.data.answer,
      },
      method: 'post',
      success: function (res) {
        console.log('洞主回复留言数据传递成功！')
      }
    })
    wx.showToast({
      title: '回复成功',
    })
  }
})