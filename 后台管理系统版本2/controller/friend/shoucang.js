'use strict'

class shoucang{

    constructor () {
        this.param='/'
    }
    async get(c){
      let data=await c.service.model.shoucang.get()
      console.log('这是shoucang表中的数据',data)
      c.send(data)
    } 
    async post(c){
      console.log('这是传递给我的数据',c.body.toString())
        let data=await c.service.model.shoucang.insert(c.body.toString());
        c.send(data)
    }
}

module.exports = shoucang
