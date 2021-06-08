//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    uid:'',
  },

    //事件处理函数
    bindViewTap: function() {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },

 
  login:function(){
    var that = this;
    wx.navigateTo({
      url: '../shouye/shouye',
    })
    wx.getStorage({
      key: 'uid',
      success:function(res){
        if(res.data){
          that.setData({uid:res.data})         
        }else{
          that.setData({uid:''})
        }
      }
    })

    wx.login({
      success:res=>{
        console.log(res.code)
        wx.request({
          url:'http://10.7.86.184:1111/login/wxlogin?code='+res.code,
          // url:'http://localhost:1111/login/wxlogin?code='+res.code,
          success:r=>{
            console.log(r)
            wx.request({
              url:'http://10.7.86.184:1111/login/wxlogin',
              // url:'http://localhost:1111/login/wxlogin',
              method:'POST',
              data:{
                uid:Number(this.data.uid),
                uimg:this.data.userInfo.avatarUrl,
                uname:this.data.userInfo.nickName,
              },
              success:res=>{
                console.log(res)
                console.log(typeof(res.data))
                if(typeof(res.data)==="number"){   
                 
                  wx.setStorage({
                    data: res.data,
                    key: 'uid',
                  })
                  console.log("第一次用户信息传输数据成功！");
                }
              }
            })
          }
        })
      },
      fail:err=>{
        console.error(err)
      }
    })


  
    console.log(this.data)
    //传输用户名字头像，接收用户uid
   

  },

 

 

  onLoad: function () {
  
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //用于暂时测试使用
  gogogo:function(){
    wx.navigateTo({
      // url: '../store/store',
      url:'../shouye/shouye.js'
    })
  },
  kk:function(){
    wx.navigateTo({
      url: '../myLetter/myLetter',
    })
  }
})
