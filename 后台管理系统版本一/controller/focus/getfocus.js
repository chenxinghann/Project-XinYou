'use strict'

class getfocus {
    constructor() {
        this.param = '/'
    }
    async get(c) {
        let data = await c.service.model.getfocus.get(c.body.toString());
        let d = {
            data: data
        }
        c.send(d);
    }
    async post(c) {
        let data = await c.service.model.getfocus.insert(c.body.toString());
        let d = {
            msg: '得到focus',
            data: data
        }
        c.send(d);
    }
}

module.exports = getfocus