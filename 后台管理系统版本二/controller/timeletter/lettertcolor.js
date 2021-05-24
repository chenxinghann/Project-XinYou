'use strict'

class lettertcolor{

    constructor () {
        this.param='/'
    }
    async get (c) {
        let data=await c.service.model.lettertcolor.get()
        console.log(data);
        let d={
          'msg':'get 时光信字体颜色 success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
    async post(c){
        let data=c.service.model.lettertcolor.insert(c.body.toString())
        c.send(data)
    }
}

module.exports = lettertcolor
