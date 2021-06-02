'use strict'

class delmessage {
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是提交的删除树洞留言的参数contentid：', c.body.toString())
		let data = await c.service.model.delmessage.post(c.body.toString())
		c.send(data)
	}
}

module.exports = delmessage