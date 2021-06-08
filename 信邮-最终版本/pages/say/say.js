// pages/say/say.js
var arr = []
var arrr = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    excpublish:{},
    talkcontent:'',
    userInfo:{},
    uid:'',
    publishlist:[],
    talk:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
var that = this

    //获取用户id和用户的信息
    wx.getStorage({
      key: 'uid',
      success:function(res){
        that.setData({uid:res.data})
      }
    })
    wx.getStorage({
      key: 'userdata',
      success:function(res){
        that.setData({userInfo:res.data})
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
     
        //获取点击进入的这个动态的具体信息
        var that = this;
        wx.getStorage({
          key: 'excpublish',
          success:function(res){
            console.log(res)
            that.setData({excpublish:res.data})
            console.log("第一个id",res.data.publishid)
            //////////////////////
            wx.request({
              url: 'http://10.7.86.184:1111/friend/getreview',
              header: { 'Content-Type': 'application/json' },
              method:'post',
              data:{
                publishid:res.data.publishid
              },
                success:function (ress) {
    
                          //拉取评论的列表数据
             
              wx.request({
                url: 'http://10.7.86.184:1111/friend/getreview',
                header: { 'Content-Type': 'application/json' },
                method:'get',
                  success:function (res) {
                    
                    console.log(res.data)
            
                    that.setData({publishlist:res.data})
                    //  arr=[]
                    //  console.log(that.data.publishlist)
                    console.log("拉取评论数据成功！")         
             }
         })
    
                 console.log("传递publishid成功")
                }
            })



            ///////////////////////
            wx.setStorage({
              data: res.data.publishid,
              key: 'excpublishid',
            })
          }
        })
        ////////////////////////






   

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

  //获取评论内容
  talk:function(res){
    this.setData({talkcontent:res.detail.value})
  },
  

  //评论发送
  sendyes:function(){
    var addlist = {
      uname:this.data.userInfo.uname,
      uimg:this.data.userInfo.uimg,
      reviewcontent:this.data.talkcontent
    }
    console.log("第二个id",this.data.excpublish.publishid)
    console.log(this.data.userInfo)
    //向后台传输评论数据
    var that = this;
    wx.request({
      url: 'http://10.7.86.184:1111/friend/review',
      header: { 'Content-Type': 'application/json' },
      method:'post',
      data:{
        publishid:Number(this.data.excpublish.publishid),
        reviewuserid:Number(this.data.uid),
        reviewusername:this.data.userInfo.uimg,
        reviewuserimg:this.data.userInfo.uname,
        reviewcontent:String(this.data.talkcontent),
      },
        success:function (ress) {
          console.log(ress)

            //拉取评论的列表数据
         
          wx.request({
            url: 'http://10.7.86.184:1111/friend/getreview',
            header: { 'Content-Type': 'application/json' },
            method:'get',
              success:function (res) {
                
                console.log(res.data)
                that.setData({publishlist:res.data})
                that.setData({talk:''})
                // arr=[]
                // console.log(that.data.publishlist)
                // console.log("添加评论数据成功！")         
              }
          })





          

          // console.log(ress.data)

          // var this_is = this
          // wx.getStorage({
          //   key: 'excpublishid',
          //   success:function(res){
              








              // console.log(res.data)///id
              // console.log(ress.data)
              // ress.data.map(item=>{
              //   if(item.publishid===res.data){
              //     arrr.push(item)
              //     arrr = arrr.reverse()
              //    //arrr=[]
              //   }

              // })
              // arrr[arrr.length] = addlist;
              // console.log(arrr)
              // that.setData({publishlist:arrr})
              //
           //   console.log(arrr)


            //   res.data = res.data.reverse()
            // res.data[res.data.length] = addlist;
            //  console.log(res.data)
            //  that.setData({publishlist:res.data}) 
    
             
            //   that.setData({talk:''})
            //   console.log('评论数据传输成功！')  

           // }
         // })
               
        }
    })     

  }


})