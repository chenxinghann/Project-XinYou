'use strict'

class delusers {
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是提交的删除用户的参数uid：', c.body.toString())
		let data = await c.service.model.delusers.post(c.body.toString())
		c.send(data)
	}
}

module.exports = delusers