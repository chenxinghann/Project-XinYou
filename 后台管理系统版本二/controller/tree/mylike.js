'use strict'

class mylike{

    constructor () {
        this.param='/'
    }
    
    async post(c){
      let data=await c.service.model.mylike.insert(c.body.toString());
      c.send(data)
    }
    async get(c){
      console.log('这是数据：',c.body)
        //let data=c.body.toString();
        let data=await c.service.model.mylike.get();
        c.send(data)
    }
}

module.exports = mylike
