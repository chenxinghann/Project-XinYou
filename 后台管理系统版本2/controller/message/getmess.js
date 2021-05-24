'use strict'

class getmess {
    constructor() {
        this.param = '/'
    }
    async get(c) {
        let data = await c.service.model.getmess.get(c.body.toString());
        let d = {
            data: data
        }
        c.send(d);
    }
    async post(c) {
        let data = await c.service.model.getmess.insert(c.body.toString());
        let d = {
            msg: '得到回复的message',
            data: data
        }
        c.send(d);
    }
}

module.exports = getmess