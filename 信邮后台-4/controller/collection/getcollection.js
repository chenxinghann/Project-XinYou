'use strict'

class getcollection {
    constructor() {
        this.param = '/'
    }
    async get(c) {
        let data = await c.service.model.getcollection.get(c.body.toString());
        let d = {
            data: data
        }
        c.send(d);
    }
    async post(c) {
        let data = await c.service.model.getcollection.insert(c.body.toString());
        let d = {
            msg: '得到collection',
            data: data
        }
        c.send(d);
    }
}

module.exports = getcollection