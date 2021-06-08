'use strict'

class getimg {
	constructor() {
		this.param = '/'
	}
	// async get(c) {
	// 	let data = await c.service.model.upload.get(c.body.toString());
	// 	let d = {
	// 		msg: '得到上传图片',
	// 		data: data
	// 	}
	// 	c.send(d);
	// }
	async post(c) {
		let data = await c.service.model.upload.insert(c.body.toString());
		let d = {
			msg: '添加上传图片',
			data: data
		}
		c.send(d);
	}
}

module.exports = getimg