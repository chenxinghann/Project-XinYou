'use strict'

class getusers {
  constructor() {
    this.param = '/'
  }
  async get(c) {
    let data = await c.service.model.getusers.get(c.body.toString());
    let d = {
      data: data,
      code: 1
    }
    c.send(d);
  }
  async post(c) {
    let data = await c.service.model.getusers.insert(c.body.toString());
    let e = {
      data: data,
      code: 1
    }
    c.send(e)
  }
}

module.exports = getusers