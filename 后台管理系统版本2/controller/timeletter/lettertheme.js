'use strict'

class lettertheme{

    constructor () {
        this.param='/'
    }
    async get (c) {
        let data=await c.service.model.lettertheme.get()
        let d={
          'msg':'get 主题 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
}

module.exports = lettertheme
