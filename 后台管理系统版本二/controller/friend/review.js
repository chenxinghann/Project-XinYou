'use strict'

class review{

    constructor () {
        this.param='/'
    }

    async post(c) {
        let data=await c.service.model.review.insert(c.body.toString())
        c.send(data)
    }

}

module.exports = review
