'use strict'

class delcollection{
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是提交的删除用户收藏的参数uid：', c.body.toString)
		let data = await c.service.model.delcollection.post(c.body.toString())
		c.send(data)
	}
}

module.exports = delcollection