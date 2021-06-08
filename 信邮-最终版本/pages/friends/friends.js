// pages/friends/friends.js
Page({
  toSearch: function (value) {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toChat:function(){
    wx.navigateTo({
      url: '../chat/chat',
    })
  },
  data: {
    friends: [{
      id: 1,
      name: "叮叮",
      photo: "../../images/timg1.jpg",
      group: 1
    }, {
      id: 2,
      name: "当当",
      photo: "../../images/timg2.jpg",
      group: 1
    }, {
      id: 3,
      name: "哒哒",
      photo: "../../images/timg3.jpg",
      group: 2
    }, {
      id: 4,
      name: "维尼",
      photo: "../../images/timg4.jpg",
      group: 3
    }, {
      id: 5,
      name: "嘀嘀",
      photo: "../../images/timg5.jpg",
      group: 3
    }, {
      id: 6,
      name: "小樱",
      photo: "../../images/timg6.jpg",
      group: 3
    }
    ],
    groups: [{
      id: 1,
      name: "无话不说",
      hidden: true,
      count: 2
    }, {
      id: 2,
      name: "一起做梦",
      hidden: true,
      count: 1
    }, {
      id: 3,
      name: "无言感动",
      hidden: true,
      count: 3
    }],
    expanded: false,
  },
  groupclick: function (e) {
    // console.log(e);
    var id = e.currentTarget.id, groups = this.data.groups;
    for (var i = 0, len = groups.length; i < len; ++i) {
      if (groups[i].id == id) {
        groups[i].hidden = !groups[i].hidden;
      }
    }
    this.setData({
      groups: groups
    });
  }
})