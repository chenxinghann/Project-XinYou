'use strict'

class stamp {

	constructor() {
		this.param = '/'
	}
	async get(c) {
		let data = await c.service.model.stamp.get()
		let d = {
			'msg': 'get 邮票 success',
			'data': data,
			'code': 1
		}
		c.send(d)
	}
}

module.exports = stamp
