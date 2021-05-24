'use strict'

class time {

  constructor () {
    this.param = '/'
  }

  async get (c) {
    c.setHeader('content-type', 'text/html; charset=utf-8')

    let html = await c.helper.readb(c.service.pagePath + '/time.html')

    c.send(html)
  }

}

module.exports = time
