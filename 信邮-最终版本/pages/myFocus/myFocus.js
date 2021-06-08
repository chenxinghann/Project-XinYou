// pages/myFocus/myFocus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liketrees:[],
    treeid:'',
    uid:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'uid',
      success:function(res){
        that.setData({uid:res.data})
         //传递uid
        wx.request({
          url: 'http://10.7.86.184:1111/tree/mylike',
          header: { 'Content-Type': 'application/json' },
          method:'post',   
          data:{
              uid:Number(res.data)
          },
            success:function (res) {
              console.log("uid传递成功！")
            }
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
    //拉取我喜欢的树洞数据
    wx.request({
      url: 'http://10.7.86.184:1111/tree/mylike',
      header: { 'Content-Type': 'application/json' },
      method:'get',   
        success:function (res) {
          console.log(res.data) 
          res.data.map(item=>{
            item.backimg = "http://10.7.86.184:1111/static/img/backimg/"+item.backimg;
            if(that.data.uid===item.uid){       
              that.setData({liketrees:res.data}) 
              }
          }) 

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

    //跳转页面进入点击的树洞
    into:function(e){
      wx.navigateTo({
        url: `/pages/goIntoTree/goIntoTree`,
      })

       
    //传输树洞id然后拉回来点击树洞信息
    var holeid = e.currentTarget.dataset.id;  
    this.setData({treeid:holeid})
    wx.setStorage({
      data: this.data.treeid,
      key: 'treeid',
    })

    //////////匹配
    console.log(this.data.liketrees)
    this.data.liketrees.map(item=>{
      if(this.data.treeid==item.treeid){
        wx.setStorage({
          data: item,
          key: 'exchole',
        })
      }
      console.log(item)
    })



    }
})