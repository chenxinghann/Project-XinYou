'use strict'

class treelist{

    constructor () {
        this.param='/'
    }
    async get (c) {
        let data=await c.service.model.treelist.get() 
        let d={
          'msg':'get 树洞列表 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
}

module.exports = treelist
