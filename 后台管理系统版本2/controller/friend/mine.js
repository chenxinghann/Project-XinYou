'use strict'

class mine{

    constructor () {
        this.param='/'
    }

    async get (c) {
        let data=await c.service.model.mine.get()
        c.send(data)
    }

}

module.exports = mine
