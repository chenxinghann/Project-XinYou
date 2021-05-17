'use strict'

class restart {

  constructor () {

  }

  async get (c) {
    if (c.param.id === 'titbit-restart') {
      
      //子进程退出后，master进程会自动创建
      setTimeout(() => {
        process.exit()
      }, 10)
    } else {
      c.status(403)
    }

  }


}

module.exports = restart
