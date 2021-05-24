'use strict'

class user{

    constructor () {
        this.param='/'
    }
    async get (c) {
        let data=await c.service.model.user.get()
        let d={
          'msg':'get 用户列表 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
    
}

module.exports = user
