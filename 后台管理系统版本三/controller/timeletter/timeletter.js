'use strict'

class timeletter {
	constructor() {
		this.param = '/'
	}
	async get(c) {
		console.log('开始')
		let data = await c.service.model.timeletter.get()
		let d = {
			'msg': '查询时光信数据成功',
			'data': data,
			'code': 1
		}
		c.send(d);
	}

	async post(c) {
		let data = await c.service.model.timeletter.insert(c.body.toString())
		let d = {
			'msg': '插入数据成功',
			'data': data,
			'code': 1
		}
		c.send(d)
	}
}

module.exports = timeletter
