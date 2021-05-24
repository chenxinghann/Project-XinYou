'use strict'

class deltimeletter{

    constructor () {
        this.param='/'
    }
    async post(c){
      console.log('这是传递给我的要删除的时光信的数据uid letterid',c.body.toString())
      let data=await c.service.model.deltimeletter.post(c.body.toString())
      c.send(data)
    }
}

module.exports = deltimeletter
