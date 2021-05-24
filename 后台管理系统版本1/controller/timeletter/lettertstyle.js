'use strict'

class lettertstyle{

    constructor () {
        this.param='/'
    }
    async get (c) {
        let data=await c.service.model.lettertstyle.get()
        let d={
          'msg':'get 时光信字体 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
    async post(c){
        let data=c.service.model.lettertstyle.insert(c.body.toString())
        c.send(data)
    }
}

module.exports = lettertstyle
