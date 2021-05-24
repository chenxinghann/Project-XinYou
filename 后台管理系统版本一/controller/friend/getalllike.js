'use strict'

class getalllike{

    constructor () {
        this.param='/'
    }
    async get(c){
      let data=await c.service.model.getalllike.get(c.body.toString());
      let d={
        data:data,
        code:1
      }
      c.send(d);
    }
}

module.exports = getalllike
