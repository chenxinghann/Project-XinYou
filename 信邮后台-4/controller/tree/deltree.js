'use strict'

class deltree {
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是提交的删除树洞的参数treeid：', c.body.toString())
		let data = await c.service.model.deltree.post(c.body.toString())
		c.send(data)
	}
}

module.exports = deltree
