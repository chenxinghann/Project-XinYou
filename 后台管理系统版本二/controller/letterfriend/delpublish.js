'use strict'
class delpublish {
  constructor() {
    this.param = '/'
  }
  async post(c) {
    console.log('这是提交的删除用户的参数uid publishid：', c.body.toString())
    let data = await c.service.model.delpublish.post(c.body.toString())
    c.send(data)
  }
}
module.exports = delpublish
