'use strict'

class gettimeletterReceive {
	constructor() {
		this.param = '/'
	}
	async get(c) {
		console.log('开始')
		let data = await c.service.model.timeletterReceive.get()
		// let myDate=new Date();
		// console.log(myDate.getFullYear()); 
		c.send(data);
	}

	async post(c) {
		let data = await c.service.model.timeletterReceive.insert(c.body.toString())
		let d = {
			'msg': '插入数据成功',
			'data': data,
			'code': 1
		}
		c.send(d)
	}
}
module.exports = gettimeletterReceive
