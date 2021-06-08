// pages/theme/theme.js
var arr = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    letterid: 1,
    lettertime: '',
    themeid: 1,
    backimgid: '',
    backimg: '',
    content: '',
    lettertcolor: '',
    lettertstyle: '',
    lettertstyleid: 2,
    exctheme: {},
    uid: ''
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取该用户uid
    wx.getStorage({
      key: 'uid',
      success: function (res) {
        that.setData({ uid: res.data })
      }
    })
    console.log(this.data)

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
    //this.data.excimg = this.data.excimg ? this.data.excimg : 'http://www.lllh.club:1234/static/img/backimg/0.jpg';
    var that = this;
    //获取图片src
    wx.getStorage({
      key: 'backimg',
      success: function (res) {
        res.data = res.data ? res.data : "http://10.7.86.184:1111/static/img/backimg/0.jpg"
        that.setData({ backimg: res.data })
      }
    })
    //获取图片id
    wx.getStorage({
      key: 'backimgid',
      success: function (res) {
        that.setData({ backimgid: res.data })
      }
    })
    //获取时间
    wx.getStorage({
      key: 'times',
      success: function (res) {
        that.setData({ lettertime: res.data })
      },
    })
    //获取字体颜色
    wx.getStorage({
      key: 'txtColor',
      success: function (res) {
        that.setData({ lettertcolor: res.data })
      },
    })
    //获取字体样式
    wx.getStorage({
      key: 'txtStyle',
      success: function (res) {
        console.log(res.data)
        that.setData({ lettertstyle: res.data })
      },
    })
    //获取字体id
    wx.getStorage({
      key: 'txtfontid',
      success: function (res) {
        console.log(res.data)
        that.setData({ fontid: res.data })
      },
    })

    //获取主题样式
    wx.getStorage({
      key: 'exctheme',
      success: function (res) {
        console.log(res)
        //  res.data.bac = res.data.bac?res.data.bac:'http://www.lllh.club:1234/static/img/backimg/0.jpg';
        that.setData({ exctheme: res.data })
        //that.setData({backimg:res.data.backimg})
      }
    })
    console.log(this.data)
  },

  //跳转背景图页面
  goBacimg: function () {
    wx.navigateTo({
      url: '../store/store',
    })
  },


  //跳转时间页面
  goTime: function () {
    wx.navigateTo({
      url: '../themeTime/themeTime',
    })
  },
  goTxt: function () {
    wx.navigateTo({
      url: '../themeText/themeText',
    })
  },

  //往后台传输信的背景图，时间，内容(在点击事件里面)
  txtarea: function (e) {
    // this.setData({content:e.detail.value})
    this.data.content = e.detail.value
  },

  //寄信 post传数据
  goSendletter: function () {
    var that = this;
    wx.request({
      url: 'http://10.7.86.184:1111/timeletter/timeletter',
      header: { 'Content-Type': 'application/json' },
      data: {
        uid: Number(this.data.uid),
        letterid: Number(this.data.letterid),
        lettertime: this.data.lettertime,
        // themeid: Number(this.data.themeid),
        themeid: Number(this.data.exctheme.themeid),
        backimgid: Number(this.data.backimgid),
        fontid: Number(this.data.fontid),
        content: this.data.content,
        lettertcolor: this.data.lettertcolor,
        lettertstyleid: Number(this.data.lettertstyleid),
      },
      method: 'post',
      success: function (ress) {
        //拉取我的信件数据
        wx.request({
          url: 'http://10.7.86.184:1111/timeletter/timeletter',
          header: { 'Content-Type': 'application/json' },
          method: 'get',
          success: function (res) {
            console.log(res)
            res.data.data.map(item => {
              var uid = that.data.uid;
              if (uid === item.uid) {
                arr.push(item)
              }
            })
            wx.setStorage({
              data: arr,
              key: 'timeletters',
            })
            console.log(arr)
            arr = []
          }
        })

      },
    })
    //一次性订阅
    wx.requestSubscribeMessage({
      tmplIds: ['hw4n2WpDAlu3qDU9jQTLS-FxRvHImjQHsb_t4Fl-FhA'],//*里面填申请的id
      success(res) {
        console.log(res)
        // var appid = "wx56840c09ca9a9e39"//appid
        // var secret = "e7208fdd0bc299bce687fe7b6ee15c8a"//密钥//密钥无法查看，只能重置
        var appid = 'wx3155f27af04b2337'
        var secret = '45eaaeaea4517824f749b4f728aa674a'
        //var that = this
        wx.request({
          url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret,
          method: 'POST',
          success: function (e) {
            console.log('凭证access_token', e.data.access_token)
            setInterval(res => {
              console.log(111)
              wx.request({
                url: 'http://10.7.86.184:1111/timeletter/timeletter',
                method: 'GET',
                success: res => {
                  let date = new Date()
                  let year = date.getFullYear()
                  let month = date.getMonth() + 1;
                  let day = date.getDate();
                  let hour = date.getHours();
                  let minute = date.getMinutes();
                  let now;
                  if (minute < 10 && hour < 10) {
                    now = year + '-' + month + '-' + day + ' 0' + hour + ':0' + minute;//string
                  } else if (minute < 10 && hour >= 10) {
                    now = year + '-' + month + '-' + day + ' ' + hour + ':0' + minute;//string
                  } else if (minute >= 10 && hour < 10) {
                    now = year + '-' + month + '-' + day + ' 0' + hour + ':' + minute;//string
                  } else if (minute >= 10 && hour >= 10) {
                    now = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;//string
                  }


                  console.log(now)
                  console.log(res.data)
                  res.data.map((item, idx) => {

                    //需要用到的数据
                    //openid  lettertime 
                    console.log(item)
                    let openid = item.openid;
                    console.log(openid)

                    if (item.lettertime == now) {
                      let uid = item.uid
                      let letterid = item.letterid
                      var data = {
                        // "touser": "osBLK5SmEit8iohCj2AXpW4gHTEo",//小程序的openid，28个字符，同一微信，
                        //不同appid对应的openid也不同
                        "touser": openid,
                        "template_id": "hw4n2WpDAlu3qDU9jQTLS-FxRvHImjQHsb_t4Fl-FhA",//模板id，小程序号申请的
                        "page": "pages/myLetter/myLetter",
                        "miniprogram_state": "developer",
                        "lang": "zh_CN",
                        "data": {//data为申请模板里面可变参数
                          "thing1": {
                            "value": "您的时光信到了"
                          },
                          "thing2": {
                            "value": now
                          },
                        }
                      }//调微信接口发送请求
                      wx.request({
                        url: 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + e.data.access_token,//ACCESS_TOKEN为前面一个接口拿的凭证
                        method: 'POST',
                        data: data,
                        success: function (e) {
                          console.log('订阅消息成功', e)
                          //删除时光信
                          setTimeout(res => {
                            wx.request({
                              url: 'http://10.7.86.184:1111/timeletter/timeletter',
                              method: 'DELETE',
                              data: {
                                uid: uid,
                                letterid: letterid
                              },
                              success: res => {
                                console.log('删除成功')
                              }
                            })
                          }, 24 * 60 * 60000)
                        }
                      })

                    } else {
                      console.log('不相同')
                    }
                  })
                },
                fail(res) {
                  console.log('当前没有信件')
                }

              })
            }, 60000)
          }
        })
      },
      fail(res) {
        console.log("失败", res)
      }
    })
    wx.navigateTo({
      url: '../sendLetterSuccess/sendLetterSuccess',
    })

  },



})
