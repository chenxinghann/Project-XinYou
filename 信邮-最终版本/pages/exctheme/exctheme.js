// pages/exctheme/exctheme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seetheme:{},
    Collect:false,//默认不喜欢
    themeid:'',
    uid:'',
    likethemes:[]

  },

  toCollect () {
    var bol = this.data.Collect; // 获取状态
    this.setData({
      Collect:!bol // 改变状态
    })

    console.log(this.data)
    var like =  this.data.Collect;
    console.log(like)
    console.log(this.data.themeid)
    // 点击收藏变换是否喜欢当前主题
     if(like){
      //传输用户id和树洞id
      wx.request({
        url: 'http://10.7.86.184:1111/friend/shoucang',
        header: { 'Content-Type': 'application/json' },
        method:'post',
        data:{
          themeid:Number(this.data.themeid),
          userid:Number(this.data.uid),
        },
          success:function (res) {
            console.log('喜欢时光信的用户id和主题id传输成功！')         
          }
      })
    }else{
      //传输用户id和树洞id进行删除喜欢
      wx.request({
        url: 'http://10.7.86.184:1111/friend/delshoucang',
        header: { 'Content-Type': 'application/json' },
        method:'post',
        data:{
          themeid:Number(this.data.themeid),
          userid:Number(this.data.uid),
        },
          success:function (res) {
            console.log('删除喜欢主题的用户id和主题id传输成功！')         
          }
      })

    }
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'seetheme',
      success:function(res){
        console.log(res)
        that.setData({themeid:res.data.themeid})
      }
    })

    //获取uid
    wx.getStorage({
      key: 'uid',
      success:function(res){
        that.setData({uid:res.data})
      }
    })


     //获取我收藏的主题数据，然后决定爱心是否点亮
     wx.request({
      url: 'http://10.7.86.184:1111/friend/shoucang',
      header: { 'Content-Type': 'application/json' },
      method:'get',   
        success:function (res) {
           console.log(res.data)
          that.setData({likethemes:res.data})
          //判断
          console.log(that.data.themeid)
          console.log(that.data.likethemes)
          var s = 0
          if(res.data!=''){
            that.data.likethemes.map(item=>{
              if(item.themeid===that.data.themeid){     
                s = 1    
              }
            })
          }

          console.log(s)
          if(s===1){
            that.setData({Collect:true})
          }else{
            that.setData({Collect:false})
          }
          console.log(that.data.Collect)
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
    //获取选中的主题的背景图，主题颜色，主题名字
    var that = this;
    wx.getStorage({
      key: 'seetheme',
      success:function(res){
        console.log(res)
        that.setData({seetheme:res.data})
      }
    })
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
  //确定要使用的主题
  usetheme:function(){
    console.log(this.data.seetheme)
    
    wx.setStorage({
      data: this.data.seetheme,
      key: 'exctheme',
    })
    wx.navigateTo({
      url: '../theme/theme',
    })
  }
})