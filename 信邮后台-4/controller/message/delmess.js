'use strict'

class delmess {
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是提交的洞主回复的参数treeid：', c.body.toString)
		let data = await c.service.model.delmess.post(c.body.toString())
		c.send(data)
	}
}

module.exports = delmess