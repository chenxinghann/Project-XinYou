// // pages/createTree/createTree.js

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     treename:'',
//     treecontent:'',
//     maxnumber:'',
//     uid:'',
//     backimgid:'',
//     uimg:'',
//     treedata:''

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     var that = this;
//     //获取用户头像
//     wx.getStorage({
//       key: 'userimg',
//       success:function(res){
//         that.setData({uimg:res.data})
//       }
//     })

  
//     wx.getStorage({
//       key: 'uid',
//       success:function(res){
//         console.log(res)
//         //console.log(res)
//         that.setData({uid:res.data})
//       }
//     })

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
   
//     var that = this;
//     wx.getStorage({
//       key: 'backimgid',
//       success: function(res) {
//         that.setData({backimgid:res.data})
//       } 
//     })
  
   

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   },

//   //获取创建的树洞名字
//   treename:function(e){
//     console.log(e)
//     this.setData({treename:e.detail.value})
//     //this.data.treename = e.detail.value;
//   },
//   //获取树洞介绍
//   treecontent:function(e){
//     console.log(e)
//     this.setData({treecontent:e.detail.value})
//    // this.data.treecontent = e.detail.value;
//   },
//   //获取最大参与人数
//   maxnumber:function(e){
//     console.log(e)
//     this.setData({maxnumber:e.detail.value})
//     //this.data.maxnumber = e.detail.value;
//   },
  




//   selectImg: function () {
//     wx.navigateTo({
//       url: '../themeImg/themeImg',
//     })
    

//   },

//   jumpMyTree:function(){
//        //存储 树洞名字 内容 跨页用
//        wx.setStorage({
//         data: this.data.treename,
//         key: 'treename',
//       })
//       wx.setStorage({
//         data: this.data.treecontent,
//         key: 'treecontent',
//       })
//       //获取背景图id
//       var that = this;
    
//    //获取树洞信息判断你是否创建过
//     wx.getStorage({
//       key: 'treedate',
//       success:function(res){
        
//          //if判断
//     var s=0;
//     res.data.map(item=>{
//       if(item.uid===that.data.uid){
//         s = 1;
//       }
//     })
//     if(s===1){
//       wx.showToast({
//         title: '您已创建过树洞',
//       })
//     }else{

//     wx.request({
//       url: 'http://10.7.86.184:1111/tree/tree',
//       header: { 'Content-Type': 'application/json' },
//       data:{
//         uid:Number(that.data.uid),
//         uimg:that.data.uimg,
//         treename:that.data.treename,
//         treecontent:that.data.treecontent,
//         maxnumber:Number(that.data.maxnumber),
//         backimgid:Number(that.data.backimgid),
//       },
//       method:'post',
//         success:function (e) {     
//           console.log(e) 
//           console.log("创建树洞传输数据成功！");
//   }

// })

//       wx.navigateTo({
//         url: '../tree/tree',
//       })
//     }

    

     
       
//       }
//     })

   
// console.log(this.data)
//   }
  
// })


// pages/createTree/createTree.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    treename: '',
    treecontent: '',
    maxnumber: '',
    uid: '',
    backimgid: '',
    uimg: '',
    // treedata: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取用户头像
    wx.getStorage({
      key: 'userimg',
      success: function (res) {
        that.setData({ uimg: res.data })
      }
    })


    wx.getStorage({
      key: 'uid',
      success: function (res) {
        console.log(res)
        //console.log(res)
        that.setData({ uid: res.data })
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
    wx.getStorage({
      key: 'backimgid',
      success: function (res) {
        that.setData({ backimgid: res.data })
      }
    })
  },

  // gopbulish:function(){
  jumpMyTree: async function () {
    //将准备要发的动态信息传输到后端
    wx.request({
      url: 'http://10.7.86.184:1111/tree/tree',
      header: { 'Content-Type': 'application/json' },
      data: {
        // time: this.data.time,
        treeid: r['rows'][length - 1].treeid + 1,
        treename: this.data.treename,
        backimgid: this.data.backimgid,
        maxnumber: this.data.maxnumber,
        treecontent: this.data.treecontent,
        uid: this.data.uid
      },
      method: 'post',
      success: function (res) {
        console.log("创建树洞数据传向后端成功！")
      }
    })

    wx.showToast({
      title: '创建成功',
    })

    wx.switchTab({
      url: '../tree/tree',
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

  //获取创建的树洞名字
  treename: function (e) {
    console.log(e)
    this.setData({ treename: e.detail.value })
    //this.data.treename = e.detail.value;
  },
  //获取树洞介绍
  treecontent: function (e) {
    console.log(e)
    this.setData({ treecontent: e.detail.value })
    // this.data.treecontent = e.detail.value;
  },
  //获取最大参与人数
  maxnumber: function (e) {
    console.log(e)
    this.setData({ maxnumber: e.detail.value })
    //this.data.maxnumber = e.detail.value;
  },





  selectImg: function () {
    wx.navigateTo({
      url: '../themeImg/themeImg',
    })


  },

  jumpMyTree: function () {
    //存储 树洞名字 内容 跨页用
    wx.setStorage({
      data: this.data.treename,
      key: 'treename',
    })
    wx.setStorage({
      data: this.data.treecontent,
      key: 'treecontent',
    })
    //获取背景图id
    var that = this;

    //获取树洞信息判断你是否创建过
    wx.getStorage({
      key: 'treedate',
      success: function (res) {
        wx.request({
          // url: 'http://www.lllh.club:1234/tree/tree',
          url: 'http://10.7.86.184:1111/tree/tree',
          header: { 'Content-Type': 'application/json' },
          data: {
            uid: Number(that.data.uid),
            // uimg: that.data.uimg,
            treeid: that.data.treeid,
            treename: that.data.treename,
            treecontent: that.data.treecontent,
            maxnumber: Number(that.data.maxnumber),
            backimgid: Number(that.data.backimgid),
          },
          method: 'post',
          success: function (e) {
            console.log(e)
            console.log("创建树洞传输数据成功！");
          }
        })
        wx.navigateTo({
          // url: '../myTree/myTree',
          url: '../tree/tree',
        })        
      }
    })
    console.log(this.data)
  }
})
