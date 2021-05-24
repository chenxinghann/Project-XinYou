'use strict'

class updatetreeowner{

    constructor () {
        this.param='/'
    }
    async put(c) {
      console.log(c.body.toString())
        let data=await c.service.model.updatetreeowner.update(c.body.toString())
        let d={
          'msg':'get 具体树洞内容 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
}

module.exports = updatetreeowner
