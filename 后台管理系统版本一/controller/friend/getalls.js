'use strict'

class getalls{

    constructor () {
        this.param='/'
    }
    async get(c){
      let data=await c.service.model.getalls.get(c.body.toString());
      let d={
        data:data,
        code:1
      }
      c.send(d);
    }
}

module.exports = getalls
