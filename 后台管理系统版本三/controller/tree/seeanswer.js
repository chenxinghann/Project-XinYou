'use strict'

class seeanswer {
	constructor() {
		this.param = '/'
	}
	async post(c) {
		console.log('这是传递给我的uid', c.body.toString())
		await c.service.model.seeanswer.post(c.body.toString())
	}
	async get(c) {
		let data = await c.service.model.seeanswer.get()
		console.log('这是洞主回复', data)
		let d = {
			'msg': 'get 洞主回复 success',
			'data': data,
			'code': 1
		}
		c.send(d)
	}
}

module.exports = seeanswer
