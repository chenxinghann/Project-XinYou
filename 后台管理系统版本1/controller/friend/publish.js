'use strict'

class publish{

    constructor () {
        this.param='/'
    }

    async post(c) {
        let data=await c.service.model.publish.insert(c.body.toString())
        c.send(data)
    }
    async get (c) {
        let data=await c.service.model.publish.get()
        c.send(data)
    }
    async delete(c) {
        let data=await c.service.model.publish.get(c.body.toString())
        c.send(data)
    }

}

module.exports = publish
