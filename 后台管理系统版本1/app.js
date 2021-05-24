'use strict'

process.chdir(__dirname)

const titbit = require('titbit')
const tloader = require('titbit-loader')
const tapi = require('titbit-api')
const { resource, tofile } = require('titbit-toolkit')
const cluster = require('cluster')

const pg = require('pg')
let config = {
	database: 'xinyou',
  user: 'rxh',
	password: '123456',
	host : '120.77.179.222'
}

//引入封装的函数集合模块
const funcs = require('./lib/funcs')
const token = require('./lib/token')
const testUser = require('./data/testUser')
let loadFile = '/tmp/loadinfo.log'

if (process.platform === 'win32') {
	loadFile = 'C:\\Users\\Public\\loadinfo.log'
}

const app = new titbit({
	debug: true,
	loadInfoFile: loadFile,
	
})
app.use(async (c, next) => {
	c.setHeader("Access-Control-Allow-Origin", "*");
	c.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
	c.setHeader("Access-Control-Allow-Methods", "*");
	c.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	await next(c);
})
if (cluster.isWorker) {
	app.addService('pagePath', __dirname + '/pages')
	//把存储负载信息的文件加载到service，在请求中就可以通过c.service.loadFile访问到。
	app.addService('loadFile', loadFile)
	app.addService('funcs', funcs)
	app.addService('token', token)
	//key必须是32位
	app.addService('tokenKey', '123456789012345678900987654321qw')
	app.addService('testUser', testUser)
	let tld = new tloader({
		loadModel: true,
		mdb: new pg.Pool(config)
	})
	
	//开始自动加载过程。
	tld.init(app)
}

if (cluster.isWorker) {
	//启用静态文件组件
	let st = new resource({
		//设定静态资源所在目录
		staticPath: './public',
		routePath: '/static/*',
		//静态资源路由所在分组。
		routeGroup: '_static',
		//设置最大缓存100M，这会缓存读取过的文件，缓存在内存中不会再次去读取文件。
		maxCacheSize: 100000000
	})
	st.init(app)
	app.get('/favicon.ico', async c => { }, { group: '_static' })
	app.use((new tofile()).mid())
}

app.daemon(1111, 2)
// app.run(1111,'120.77.179.222')
