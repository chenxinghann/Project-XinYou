// pages/goIntoTree/goIntoTree.js
Page({
  /*页面的初始数据*/
  data: {
    isCollect: false, // 默认没有喜欢
    openPicker: false,
    needAnimation: false,
    contentHeight: 0,
    messages: {},
    treeid: '',
    uid: '',
    liketrees: [],
    exchole: {},
    stamp: ''
  },
  toCollect() {
    var bol = this.data.isCollect; // 获取状态
    this.setData({
      isCollect: !bol // 改变状态
    })

    console.log(this.data)
    var like = this.data.isCollect;
    console.log(like)
    //点击爱心变换是否喜欢当前树洞
    if (like) {
      //传输用户id和树洞id
      wx.request({
        // url: 'http://192.168.1.106:1111/tree/belike',
        // url: 'http://10.7.86.184:1111/tree/belike',
        url: 'http://localhost:1111/focus/getfocus',
        header: { 'Content-Type': 'application/json' },
        method: 'post',
        data: {
          treeid: Number(this.data.treeid),
          userid: Number(this.data.uid),
        },
        success: function (res) {
          console.log('喜欢模块的用户id和树洞id传输成功！')
        }
      })
    } else {
      //传输用户id和树洞id进行删除喜欢
      wx.request({
        // url: 'http://192.168.1.106:1111/tree/dellike',
        url: 'http://10.7.86.184:1111/tree/dellike',
        header: { 'Content-Type': 'application/json' },
        method: 'post',
        data: {
          treeid: Number(this.data.treeid),
          userid: Number(this.data.uid),
        },
        success: function (res) {
          console.log('删除喜欢模块的用户id和树洞id传输成功！')
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取树洞id
    wx.getStorage({
      key: 'treeid',
      success: function (res) {
        that.setData({ treeid: res.data })
      }
    })
    //获取用户id
    wx.getStorage({
      key: 'uid',
      success: function (res) {
        console.log(`当前登录用户的id：${res.data}`)
        // console.log(`当前登录用户的id：${wx.getStorage({key:'uid'})}`)
        that.setData({ uid: res.data })
      }
    })

    //获取我喜欢的树洞数据，然后决定爱心是否点亮
    // wx.request({
    //   // url: 'http://192.168.1.106:1111/tree/mylike',
    //   url: 'http://10.7.86.184:1111/tree/mylike',
    //   header: { 'Content-Type': 'application/json' },
    //   method:'get',   
    //     success:function (res) {
    //        console.log(res.data)
    //         that.setData({liketrees:res.data})
    //         //判断
    //         var s = 0
    //         that.data.liketrees.map(item=>{
    //           if(item.treeid===that.data.treeid){     
    //             s = 1    
    //           }
    //         })
    //         console.log(s)
    //         if(s===1){
    //           that.setData({isCollect:true})
    //         }else{
    //           that.setData({isCollect:false})
    //         }
    //         console.log(that.data.isCollect)
    //     }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //动态根据手机分辨率来计算内容的高度〈屏幕总高度-顶部筛选栏的高度》
          contentHeight: (res.windowHeight - 72 * res.screenwidth / 750)
        });
      }
    })
  },

  /* 生命周期函数--监听页面显示*/
  onShow: function () {
    //获取点击的树洞详细信息
    var that = this;
    wx.getStorage({
      key: 'exchole',
      success: function (res) {
        console.log(res.data)
        that.setData({ exchole: res.data })
        wx.setStorage({
          data: res.data,
          key: 'exchole',
        })
      }
    })
  },

  comment: function () {
    wx.navigateTo({
      url: `../leaveMessage/leaveMessage`,
    })
  },
  jumpMessage: function () {
    wx.navigateTo({
      url: '../message/message',
    })
  },

  //留言记录
  onPickHeaderClick: function () {
    var that = this;
    //传给后端uid便于后续查看别人给我的回复
    console.log('当前登录用户的id: '+this.data.uid)
    wx.request({
      url: 'http://10.7.86.184:1111/treemessage/getmessage',
      header: { 'Content-Type': 'application/json' },
      method: 'get',
      data: {
        // userid: Number(this.data.uid),
        treeid: Number(this.data.treeid),
        // stamp:"http://10.7.86.184:1111/static/img/stamp/"+item.stampid+".jpg"
      },
      success: function (res) {
        console.log(res.data);
        res.data.data.map(i => {
          i.stamp = "http://10.7.86.184:1111/static/img/stamp/" + i.stampid + ".jpg";
        })
        that.setData({ messages: res.data.data })
        console.log(res.data.data)
        wx.setStorage({
          data: res.data.data,
          key: 'messages',
        })
      }
    })

    // var that = this;
    // //传给后端uid便于后续查看别人给我的回复
    // console.log(this.data.uid)
    // wx.request({
    //   // url: 'http://192.168.1.106:1111/tree/seeanswer',
    //   url: 'http://10.7.86.184:1111/tree/seeanswer',
    //   header: { 'Content-Type': 'application/json' },
    //   method: 'post',
    //   data: {
    //     userid: Number(this.data.uid),
    //   },
    //   success: function (res) {
    //     console.log('传输用户uid成功，以便查询属于这个uid的树洞回复！')
    //   }
    // })
    // ////进行判断获取投档记录
    // if (this.data.uid === this.data.treeid) {
    //   wx.request({
    //     // url: 'http://192.168.1.106:1111/tree/seemessage',
    //     url: 'http://10.7.86.184:1111/tree/seemessage',
    //     header: { 'Content-Type': 'application/json' },
    //     method: 'get',
    //     success: function (res) {
    //       console.log(res)
    //       console.log(123)
    //       console.log(res.data.data)
    //       that.setData({ messages: res.data.data })

    //     }
    //   })
    // } else {
    //   //获取点击的树洞我的投档记录
    //   wx.request({
    //     // url: 'http://192.168.1.106:1111/tree/mymessage',
    //     url: 'http://10.7.86.184:1111/tree/mymessage',
    //     header: { 'Content-Type': 'application/json' },
    //     method: 'get',
    //     success: function (res) {
    //       console.log(456)
    //       console.log(res)
    //       that.setData({ messages: res.data.data })
    //     }
    //   })
    // }


    //投档
    this.setData({
      openPicker: !this.data.openPicker,
      needAnimation: true
    })
  },

  //点击投档记录里面查看投档历史
  gomymessage: function (res) {
    // var excmessage = res.currentTarget.dataset.value;
    // console.log(res.currentTarget)
    // this.setData({ excmessage: excmessage })
    // wx.setStorage({
    //   data: excmessage,
    //   key: 'excmessage',
    // })
    var conid = res.currentTarget.dataset.id;
    console.log(res.currentTarget)
    this.setData({ contentid: conid })
    wx.setStorage({
      data: this.data.contentid,
      key: 'contentid',
    })
    //匹配
    console.log(this.data.messages)
    this.data.messages.map(item => {
      if (this.data.contentid == item.contentid) {
        wx.setStorage({
          data: item,
          key: 'excmessage',
        })
      }
      // console.log(item)
    })
    console.log(this.data.exchole)
    //判断是否为洞主然后决定进哪个页面
    if (this.data.uid === this.data.exchole.uid) {
      wx.navigateTo({
        url: '../seeMessage/seeMessage',
      })
    } else {
      wx.navigateTo({
        url: '../myMessage/myMessage',
      })
    }

  },
  //去看个人资料
  gomeans: function () {
    wx.navigateTo({
      url: '../InformationHome/informationHome',
    })
  }
})
