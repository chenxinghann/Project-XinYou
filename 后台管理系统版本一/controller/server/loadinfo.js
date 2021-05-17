'use strict'

class loadinfo {

  constructor () {
    this.param = '/'
  }

  async get (c) {
    
    c.setHeader('content-type', 'text/plain; charset=utf-8')
    
    //通过app.addService添加的数据可以用c.service访问到。
    let loadtext = await c.helper.readb(c.service.loadFile)

    c.send(loadtext)

  }

}

module.exports = loadinfo
