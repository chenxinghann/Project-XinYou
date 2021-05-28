'use strict'

class mymessage {
  constructor() {
    this.param = '/'
  }
  async post(c) {
    console.log('这是我的留言：', c.body.toString())
    await c.service.model.mymessage.post(c.body.toString())
  }
  async get(c) {
    let data = await c.service.model.mymessage.get()
    console.log('这是我在其他树洞的投档记录', data)
    let d = {
      'msg': 'get 树洞列表 success',
      'data': data,
      'code': 1
    }
    c.send(d)
  }
}

module.exports = mymessage
