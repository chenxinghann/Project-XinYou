'use strict'

class seemessage {
  constructor() {
    this.param = '/'
  }
  async post(c) {
    console.log('这是该洞主的treeid：', c.body.toString())
    await c.service.model.seemessage.post(c.body.toString())
  }
  async get(c) {
    let data = await c.service.model.seemessage.get()
    console.log('这是洞主查看其他人的留言记录', data)
    let d = {
      'msg': 'success',
      'data': data,
      'code': 1
    }
    c.send(d)
  }
}

module.exports = seemessage
