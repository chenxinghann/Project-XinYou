'use strict'

class dellike{

    constructor () {
        this.param='/'
    }
    
    async post(c){
      console.log('删除数据的接口',c.body.toString())
      let data=await c.service.model.dellike.post(c.body.toString());
      let d={
        msg:'delete success',
        data:data,
        code:1
      }
      c.send(d);
    }
}

module.exports = dellike
