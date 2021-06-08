// pages/leaveMessage/leaveMessage.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exchole: '',
    treeid: '',
    messcontent: '',
    excstamp: '',
    stampid: '',
    uid: '',
    messid: '',
    contentid:''
    // 这里面有treeid
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    wx.getStorage({
      key: 'uid',
      success: function (res) {
        console.log(res)
        // that.setData({ exctreeid: res.data.treeid })
        // that.setData({ exchole: res.data })
        that.setData({ messid: res.data })
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    //获取进来的树洞id
    wx.getStorage({
      key: 'exchole',
      success: function (res) {
        console.log(res)
        that.setData({ treeid: res.data.treeid })
        that.setData({ uid: res.data.uid })
        that.setData({ exchole: res.data })
      }
    })

    //获取选择的邮票
    wx.getStorage({
      key: 'excstamp',
      success: function (res) {
        console.log(res)
        that.setData({ excstamp: res.data })
      }
    })
    wx.getStorage({
      key:'stampid',
      success:(res)=>{
        that.setData({stampid: res.data.substr(41,1)})
      }
    })
    console.log(this.data)
  },

  showSubmit: function () {
    //向后端传输留言信息参数 
    wx.request({
      // url: 'http://10.7.86.184:1111/tree/treemessage',
      url: 'http://10.7.86.184:1111/treemessage/getmessage',
      header: { 'Content-Type': 'application/json' },
      data: {
        //  userid:Number(this.data.userid),
        uid: Number(this.data.uid),
        treeid: Number(this.data.treeid),
        messid: Number(this.data.messid),
        messcontent: this.data.messcontent,
        stampid: this.data.excstamp.substr(41,1),
        // contentid: Number(this.data.length) + 1
      },
      method: 'post',
      success: function (res) {
        // console.log(res);
        console.log("留言数据信息传输成功！")
      }
    })
    //跳转留言成功页面
    //  wx.navigateTo({
    //    url: '../leaveMessageSuccess/leaveMessageSuccess',
    //  })
    wx.showToast({
      title: '留言成功',
    })
  },
  gostamp: function () {
    wx.navigateTo({
      url: `/pages/stamp/stamp`,
    })
  },

  //获取留言内容
  content: function (e) {
    this.setData({ messcontent: e.detail.value })
  }

})
