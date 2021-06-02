'use strict'

class test {
  constructor () {

  }

  async get (c) {
    
    await new Promise((rv, rj) => {
      setTimeout(() => {
        rv()
      }, parseInt(Math.random() * 25))
    })

    c.send(c.param.id)
    
  }


}

module.exports = test
