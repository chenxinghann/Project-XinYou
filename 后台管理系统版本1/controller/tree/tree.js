'use strict'

class tree {
	constructor() {
		this.param = '/'
	}

	async post(c) {
		console.log('这是后台提交的数据', c.body.toString())
		let data = await c.service.model.tree.insert(c.body.toString())
		// if (data === '你已创建树洞') {
		// 	let d = {
		// 		'msg': '你已经创建树洞',
		// 		'data': data,
		// 		'code': 0
		// 	}
		// 	c.send(d)
		// } else {
			let d = {
				'msg': '创建树洞成功',
				'data': data,
				'code': 1
			}
			c.send(d)
		// }
	}
}

module.exports = tree
