// // pages/tree/tree.js
// Page({

  

//   /**
//    * 页面的初始数据
//    */
//   data: {
//       treedata:[],
//       treeid:'',
//       uid:''
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     console.log(this.data)
    
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
//     //获取用户的uid
//     wx.getStorage({
//       key: 'uid',
//       success:function(res){
//         that.setData({uid:res.data})
//       }
//     })


//     //拉去后台的树洞列表数据
//     var that = this;
//     wx.request({
//       // url: 'http://192.168.1.106:1111/tree/treelist',
//       url: 'http://10.7.86.184:1111/tree/treelist',
//       header: { 'Content-Type': 'application/json' },
//       // data:{
//       //   img:''
//       // },
//       method:'get',
//         success:function (res) {
//           console.log(res.data);   
//           res.data.data.map(item=>{
//             item.backimg = "http://10.7.86.184:1111/static/img/backimg/"+item.backimg;
//           })

//           that.setData({treedata:res.data.data})
//           console.log(res.data.data)
//           wx.setStorage({
//             data: res.data.data,
//             key: 'treedate',
//           })
         
//         }
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
  

//   //跳转页面进入点击的树洞
//   into:function(e){
//     wx.navigateTo({
//       url: `/pages/goIntoTree/goIntoTree`,
//     })

    
//     //传输树洞id然后拉回来点击树洞信息
//     var holeid = e.currentTarget.dataset.id;
//     this.setData({treeid:holeid})
//     wx.setStorage({
//       data: this.data.treeid,
//       key: 'treeid',
//     })

//     //////////匹配
//     console.log(this.data.treedata)
//     this.data.treedata.map(item=>{
//       if(this.data.treeid==item.treeid){
//         wx.setStorage({
//           data: item,
//           key: 'exchole',
//         })
//       }
//       console.log(item)
//     })



//     //传给后端用户uid和树洞treeid，以便后续拉去对应用户在对应树洞的投档记录
//     var that = this;
//     if(this.data.treeid===this.data.uid){
//                 //针对洞主
//     wx.request({
//       // url: 'http://192.168.1.106:1111/tree/seemessage',
//       url: 'http://10.7.86.184:1111/tree/seemessage',
//       header: { 'Content-Type': 'application/json' },
//       data:{
//         treeid:Number(this.data.treeid),
//         userid:Number(this.data.uid)
//       },
//       method:'post',
//         success:function (res) {
//           console.log("针对洞主用户userid和树洞treeid数据传输成功！")
//         }
//     })
 

//     }else{

//     wx.request({
//       // url: 'http://192.168.1.106:1111/tree/mymessage',
//       url: 'http://10.7.86.184:1111/tree/mymessage',
//       header: { 'Content-Type': 'application/json' },
//       data:{
//         treeid:Number(this.data.treeid),
//         userid:Number(this.data.uid)
//       },
//       method:'post',
//         success:function (res) {
//           console.log("用户userid和树洞treeid数据传输成功！")
//         }
//     })

//     }

//   },
//   foundTree:function(){
//     wx.navigateTo({
//       url: `/pages/createTree/createTree`,
//     })
//   }
// })

// pages/tree/tree.js
Page({
  /*页面的初始数据*/
  data: {
    // treedata: [],
    // // treeid: '',
    // uid: ''
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    console.log(this.data)
  },

  /* 生命周期函数--监听页面初次渲染完成*/
  onReady: function () {

  },

  /*生命周期函数--监听页面显示*/
  onShow: function () {
    var that = this;
    //获取用户的uid
    wx.getStorage({
      key: 'uid',
      success: function (res) {
        that.setData({ uid: res.data })
      }
    })
    //拉取后台的树洞列表数据
    var that = this;
    wx.request({
      url: 'http://10.7.86.184:1111/tree/treelist',
      header: { 'Content-Type': 'application/json' },
      // data:{
      //   img:''
      // },
      method: 'get',
      success: function (res) {
        console.log(res.data);
        res.data.data.map(item => {
          item.backimg = "http://10.7.86.184:1111/static/img/backimg/" + item.backimg;
        })

        that.setData({ treedata: res.data.data })
        console.log(res.data.data)
        wx.setStorage({
          data: res.data.data,
          key: 'treedate',
        })

      }
    })
  },


  //跳转页面进入点击的树洞
  into: function (e) {
    wx.navigateTo({
      url: `/pages/goIntoTree/goIntoTree`,
    })

    //传输树洞id然后拉回来点击树洞信息
    var holeid = e.currentTarget.dataset.id;
    this.setData({ treeid: holeid })
    wx.setStorage({
      data: this.data.treeid,
      key: 'treeid',
    })

    //////////匹配
    console.log(this.data.treedata)
    this.data.treedata.map(item => {
      if (this.data.treeid == item.treeid) {
        wx.setStorage({
          data: item,
          key: 'exchole',
        })
      }
      console.log(item)
    })



    //传给后端用户uid和树洞treeid，以便后续拉去对应用户在对应树洞的投档记录
    var that = this;
    // if (this.data.treeid === this.data.uid) {
    if (this.data.uid === this.data.uid) {
      //针对洞主
      wx.request({
        // url: 'http://www.lllh.club:1234/tree/seemessage',
        url: 'http://10.7.86.184:1111/tree/seemessage',
        header: { 'Content-Type': 'application/json' },
        data: {
          treeid: Number(this.data.treeid),
          userid: Number(this.data.uid)
        },
        method: 'post',
        success: function (res) {
          console.log("针对洞主用户userid和树洞treeid数据传输成功！")
        }
      })


    } else {

      wx.request({
        // url: 'http://www.lllh.club:1234/tree/mymessage',
        url: 'http://10.7.86.184:1111/tree/mymessage',
        header: { 'Content-Type': 'application/json' },
        data: {
          treeid: Number(this.data.treeid),
          userid: Number(this.data.uid)
        },
        method: 'post',
        success: function (res) {
          console.log("用户userid和树洞treeid数据传输成功！")
        }
      })

    }

  },
  foundTree: function () {
    wx.navigateTo({
      url: `/pages/createTree/createTree`,
    })
  }
})
