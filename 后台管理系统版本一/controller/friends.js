'use strict'

class friends {

  constructor () {
    this.param = '/'
  }

  async get (c) {
    c.setHeader('content-type', 'text/html; charset=utf-8')

    let html = await c.helper.readb(c.service.pagePath + '/friends.html')

    c.send(html)
  }

}

module.exports = friends
