'use strict'

class message{

    constructor () {
        this.param='/'
    }
    async get (c) {
        let data=await c.service.model.message.get()
        let d={
          'msg':'get 树洞留言表 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
    
    async post(c) {
        let data=data.JSON.toString();
        await c.service.model.message.insert(data);
        c.send('留言成功')
    }
}

module.exports = message
