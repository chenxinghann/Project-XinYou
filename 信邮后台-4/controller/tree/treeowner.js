'use strict'

class treeowner {

  constructor() {
    this.param = '/'
  }
  async get(c) {
    console.log(c.body.toString())
    let data = await c.service.model.treeowner.get(c.body.toString())
    let d = {
      'msg': 'get 具体树洞内容 success',
      'data': data,
      'code': 1
    }
    c.send(d)
  }
}

module.exports = treeowner
