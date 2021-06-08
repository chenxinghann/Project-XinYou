'use strict'

const gohttp = require('gohttp').httpcli
let openid = '';
let token_key = 'qwertyuiopasdfghjklzxcvbnm123456'
class wxlogin {
	constructor() {
		this.param = '/'
	}

	async get(c) {
		console.log('c.query.code', c.query.code)
		//使用gohttp发起请求，调用小程序服务端API
			let login_url = `https://api.weixin.qq.com/sns/jscode2session`
			+`?appid=wx3155f27af04b2337`
			+`&secret=45eaaeaea4517824f749b4f728aa674a`
			+`&js_code=${c.query.code}`
			+`&grant_type=authorization_code`
		//获取的结果是一个对象，包括headers，status，OK，data等属性
		let result = await gohttp.get(login_url)
		let r = result.json()
		console.log('ok')
		console.log(`r.openid是:${r.openid}`)
		openid = r.openid
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
		// let token = c.helper.aesEncrypt(JSON.stringify(info), c.service.tokenKey)
		let token = c.helper.aesEncrypt(JSON.stringify(info), token_key)
		c.send(token)
	}
	async post(c) {
		let data = c.body.toString()
		let d = JSON.parse(data)
		d.openid = openid
		// console.log(`d:${d}`)
		// console.log(`最近登录用户${d}`)
		console.log(`最近登录用户的uid:${d.uid}`)
		console.log(`最近登录用户的uname:${d.uname}`)
		console.log(`最近登录用户的openID:${d.openid}`)
		
		let data1 = await c.service.model.wxlogin.insert(d)
		c.send(data1)
	}
}

module.exports = wxlogin








// 'use strict'

// const gohttp = require('gohttp')
// // const wxkey = require('./config/wxkey')
// let openid = '';
// class login {
// 	constructor() {
// 		this.param = '/'
// 	}

// 	async get(c) {
// 		console.log('c.query.code', c.query.code)
// 		let url = 'https://api.weixin.qq.com/sns/jscode2session'
// 		let login_url = url
// 			+ `?appid=${c.service.wxkey.appid}`
// 			+ `&secret=${c.service.wxkey.secret}`
// 			+ `&js_code=${c.query.code}`
// 			+ `&grant_type=authorization_code`
// 		let result = await gohttp.get(login_url)
// 		let r = result.json()
// 		console.log('ok')
// 		console.log(r)
// 		openid = r.openid
// 		// openid = c.query.code
// 		console.log('openid', openid)
// 		if (r.openid === undefined) {
// 			c.status(500)
// 			return
// 		}
// 		let info = {
// 			openid: r.openid,
// 			expires: 7200000,
// 			timestamp: Date.now(),
// 			random: Math.random()
// 		}
// 		let token = c.helper.aesEncrypt(JSON.stringify(info), c.service.tokenKey)
// 		c.send(token)
// 	}
// 	async post(c) {
// 		let data = c.body.toString()
// 		let d = JSON.parse(data)
// 		d.openid = openid
// 		console.log(d)
// 		let data1 = await c.service.model.wxlogin.insert(d)
// 		c.send(data1)
// 	}
// }

// module.exports = login

