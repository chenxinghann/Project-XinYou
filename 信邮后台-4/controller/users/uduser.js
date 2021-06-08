'use strict'

class uduser {

  constructor() {
    this.param = '/'
  }
  async put(c) {
    console.log('这是要更改的个人信息数据：', c.body.toString())
    let data = await c.service.model.uduser.update(c.body.toString())
    let d = {
      'msg': 'put success',
      'data': data,
      'code': 1
    }
    c.send(d)
  }
  async get(c) {
    console.log('个人信息数据：', c.body.toString())
    let data = await c.service.model.uduser.get(c.body.toString())
  }
}

module.exports = uduser
