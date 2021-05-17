'use strict'

class getreview{

    constructor () {
        this.param='/'
    }

    async get (c) {
        let data=await c.service.model.getreview.get()
        console.log('这是review数据',data)
        c.send(data)
    }
    async post(c) {
        let data=await c.service.model.getreview.insert(c.body.toString())
        c.send(data)
    }

}

module.exports = getreview
