'use strict'

class getmessage {
	constructor() {
		this.param = '/'
	}
	async get(c) {
		let data = await c.service.model.getmessage.get(c.body.toString());
		let d = {
			msg: '得到树洞留言',
			data: data
		}
		c.send(d);
	}
	async post(c) {
		let data = await c.service.model.getmessage.insert(c.body.toString());
		let d = {
			msg: '添加树洞留言',
			data: data
		}
		c.send(d);
	}
}

module.exports = getmessage