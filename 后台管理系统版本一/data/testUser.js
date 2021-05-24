'use strict'

/**
 * 用于测试的用户，在正式的环境中应该使用数据库。
 * passwd是使用sha256生成的摘要加密数据。
 * 为了避免密码撞库，都会使用一个随机生成的字符串和密码拼接在一起然后再生成加密字符串，这个随机字符串被称为salt。
 * 在数据库中是不保存用户真正的密码的，而是当用户输入密码后，采用相同的算法生成加密字符串并和保存的值对比。
 * 
 * 比如，以下两个20182018的密码，因为salt只差1个字符，最后生成的加密字符串差距很大。
 */
module.exports = {
	'有点甜': {
		id: '1001',
		nickname: '有点甜',
		//password : 20201234
		passwd: '32a19533e03f50d975846994a22684c52d71388a08963935773e1bfc5e285b7a',
		salt: 'qaazsew'
	},

	'尘封记忆': {
		id: '1002',
		nickname: '尘封记忆',
		//password 20182018
		passwd: 'b42d4c3977097377a54c9bb79deb81fb12cca625e9399f4a33abd7c700f659dc',
		salt: 'qaazsew'
	},

	'great': {
		id: '1003',
		nickname: '芒',
		//password : 20182018
		passwd: 'bf4344cd245ffd5c05a548a7d573b8cb6fa660b578e3091458eaaccebb58352d',
		salt: 'qazsew'
	}
}