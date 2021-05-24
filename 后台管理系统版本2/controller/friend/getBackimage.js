'use strict'

class getBackimage {

  constructor() {
    this.param = '/'
  }
  async get(c) {
    let data = await c.service.model.getBackimage.get(c.body.toString());
    let d = {
      data: data,
      code: 1
    }
    c.send(d);
  }
}

module.exports = getBackimage