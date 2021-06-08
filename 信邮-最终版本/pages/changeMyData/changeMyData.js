// pages/changeMyData/changeMyData.js

var imgg;
Page({
  data: {
    name: '',
    age: '',
    home: '',
    work: '',
    interest: '',
    userimg: '',
    // userInfo: {},
    uid: '',
    newimg: '',
    user: {}
  },


  /*生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://10.7.86.184:1111/friend/user',
      // url: 'http://localhost:1111/friend/user',
      header: { 'Content-Type': 'application/json' },
      method: 'get',
      success: function (res) {
        console.log(res.data.data)
        res.data.data.map(item => {
          if (that.data.uid === item.uid) {

            if (that.data.newimg) {
              console.log(that.data.newimg)
              console.log(132)
              that.setData({ userimg: that.data.newimg })
            } else {
              console.log(525)
              that.setData({ newimg: item.uimg })
            }



            that.setData({ user: item })
            imgg = item.uimg;
            console.log(imgg)
          }
        })

      }
    })









    wx.getStorage({
      key: 'uid',
      success: function (res) {
        that.setData({ uid: res.data })
      }
    })

  },

  //更改名字的内容
  getname: function (t) {
    this.setData({ name: t.detail.value })
    wx.setStorage({
      data: t.detail.value,
      key: 'newname',
    })
  },
  //年龄
  getage: function (t) {
    this.setData({ age: t.detail.value })
  },
  //所在地
  bindRegionChange: function (e) {
    e.detail.value = e.detail.value.join(",")
    this.setData({ home: e.detail.value })
  },
  //职业
  getwork: function (t) {
    this.setData({ work: t.detail.value })
  },
  //兴趣爱好
  getinterest: function (t) {
    this.setData({ interest: t.detail.value })
  },
  //点击确定按钮
  changeok: function () {
    wx.showToast({
      title: '更改成功',
    })
    console.log(this.data)
    //向后台传递更改个人信息数据
    wx.request({
      url: 'http://10.7.86.184:1111/users/uduser',
      header: { 'Content-Type': 'application/json' },
      data: {
        uid: Number(this.data.uid),
        uimg: this.data.newimg,
        uname: this.data.name,
        area: this.data.home,
        age: Number(this.data.age),
        job: this.data.work,
        interest: this.data.interest
      },
      method: 'put',
      success: function (res) {
        console.log(res)
      }
    })
  },
  //头像
  selectImg: function () {
    // var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: 'original',
      success: res => {
        this.setData({
          newimg: res.tempFilePaths[0]
        });
      }
    });
  },

})

















// // pages/changeMyData/changeMyData.js


// var imgg;
// Page({
//   data: {
//     name:'',
//     age:'',
//     home:'',
//     work:'',
//     interest:'',
//     userimg:'',
//     // userInfo: {},
//     uid:'',
//     newimg:'',
//     user:{}
//   },


//   /*生命周期函数--监听页面加载*/
//   onLoad: function (options) {
//     var that = this
//     wx.request({
//       url: 'http://10.7.86.184:1111/friend/user',
//       header: { 'Content-Type': 'application/json' },
//       method:'get',
//         success:function (res) {
//           console.log(res.data.data)
//           res.data.data.map(item=>{
//             if(that.data.uid===item.uid){

//               if(that.data.newimg){
//                 console.log(that.data.newimg)
//                 console.log(132)
//                 that.setData({userimg:that.data.newimg})
//               }else{
//                 console.log(525)
//                 that.setData({userimg:item.uimg})    
//               }   




//               that.setData({user:item})
//               imgg = item.uimg;
//               console.log(imgg)
//             }
//           })

//         }
//     })










//     wx.getStorage({
//       key: 'uid',
//       success:function(res){
//         that.setData({uid:res.data})
//       }
//     })


//     //获取更改后的头像
//     // wx.getStorage({
//     //   key: 'newimg',
//     //   success:function(res){
//     //     that.setData({newwimg:res.data})
//     //   }
//     // })

//   },


//   //更改名字的内容
//   getname: function (t) {
//     this.setData({name: t.detail.value})
//     wx.setStorage({
//       data: t.detail.value,
//       key: 'newname',
//     })
//   },
//   //年龄
//   getage: function (t) {
//     this.setData({age: t.detail.value})
//   },
//   //所在地
//   bindRegionChange: function (e) {
//     e.detail.value = e.detail.value.join(",")
//     this.setData({home: e.detail.value})
//   },
//   //职业
//   getwork: function (t) {
//     this.setData({work: t.detail.value})
//   },
//   //兴趣爱好
//   getinterest: function (t) {
//     this.setData({interest: t.detail.value})
//   },
//   //点击确定按钮
//   changeok:function(){
//     wx.showToast({
//       title: '更改成功',
//     })
//     console.log(this.data)
//     //向后台传递更改个人信息数据
//     wx.request({
//       url: 'http://10.7.86.184:1111/friend/updatemineinf',
//       header: { 'Content-Type': 'application/json' },
//       data:{
//         uid:Number(this.data.uid),
//         uimg:this.data.newimg,
//         uname:this.data.name,
//         area:this.data.home,
//         treeid:Number(this.data.treeid),
//         age:Number(this.data.age),
//         job:this.data.work,
//         interest:this.data.interest
//       },
//       method:'put',
//         success:function (res) { 
//           console.log(res)
//        }
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


//    //头像
//    selectImg: function () {
//     var that = this;
//     wx.chooseImage({
//       count: 1,
//       sizeType: 'original',
//       success: res => {
//         wx.uploadFile({
//           url: 'http://10.7.86.184:1111/upload',
//           filePath:res.tempFilePaths[0],
//           name: 'media', 
//           method:'post',
//           success: res => { // 上传成功后的代码
//             //获取图片路径
//              var imgsrc = "http://10.7.86.184:1111/static/images/"+res.data
//              that.setData({newimg:imgsrc})
//              if(imgsrc){
//               that.setData({userimg:that.data.newimg})
//             }



//           }
//         })
//       }
//     });
//   },

// })