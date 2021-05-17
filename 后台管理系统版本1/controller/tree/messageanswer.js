'use strict'

class messageanswer{

    constructor () {
        this.param='/'
    }
    async post(c){
      console.log('这是洞主回复的内容：',c.body.toString())
      await c.service.model.messageanswer.post(c.body.toString())
    }
    async get(c){
      let data=await c.service.model.messageanswer.get()
      c.send(data)
    }
    
}

module.exports = messageanswer
