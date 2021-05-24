'use strict'

class backimg {
	constructor() {
		this.param = '/'
	}

	async get(c) {
		let img = await c.service.model.backimg.get()
		c.send(img)
	}
	async post(data) {

	}
}

module.exports = backimg
