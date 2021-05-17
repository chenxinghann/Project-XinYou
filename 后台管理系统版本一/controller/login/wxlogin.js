'use strict'

const gohttp = require('gohttp')
// const wxkey = require('./config/wxkey')
let openid = '';
class login {
	constructor() {
		this.param = '/'
	}

	async get(c) {
		console.log('c.query.code', c.query.code)
		let url = 'https://api.weixin.qq.com/sns/jscode2session'
		let login_url = url
			+ `?appid=${c.service.wxkey.appid}`
			+ `&secret=${c.service.wxkey.secret}`
			+ `&js_code=${c.query.code}`
			+ `&grant_type=authorization_code`
		let result = await gohttp.get(login_url)
		let r = result.json()
		console.log('ok')
		console.log(r)
		openid = r.openid
		// openid = c.query.code
		console.log('openid', openid)
		if (r.openid === undefined) {
			c.status(500)
			return
		}
		let info = {
			openid: r.openid,
			expires: 7200000,
			timestamp: Date.now(),
			random: Math.random()
		}
		let token = c.helper.aesEncrypt(JSON.stringify(info), c.service.tokenKey)
		c.send(token)
	}
	async post(c) {
		let data = c.body.toString()
		let d = JSON.parse(data)
		d.openid = openid
		console.log(d)
		let data1 = await c.service.model.wxlogin.insert(d)
		c.send(data1)
	}
}

module.exports = login
