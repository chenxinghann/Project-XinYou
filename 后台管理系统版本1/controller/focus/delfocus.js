'use strict'

class delfocus {
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是提交的删除用户关注的参数userid：', c.body.toString)
		let data = await c.service.model.delfocus.post(c.body.toString())
		c.send(data)
	}
}

module.exports = delfocus