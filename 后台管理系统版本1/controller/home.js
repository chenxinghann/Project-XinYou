'use strict'

/**
 * 
 * 在titbit-loader加载路由时，因为是按照文件名称映射为路由路径的，所以对于 / 来说，是无法实现的。
 * 因为 / 是目录分隔符，系统是不允许 / 作为名称出现的。
 * 所以需要一个文件指定get请求，并告诉titbit-loader不仅作为文件名代表的路由加载，还要作为 / 路由 加载（就是通常认为的主页）。
 * 
 * 如果titbit-loader不提供此功能，你就需要在应用入口文件app.js中使用app.get添加 / 路由返回主页数据。
 * 
 * 你需要注意的是：这在接口服务中是不必要的，因为接口不需要考虑主页，只需要考虑和前端通信的API设计。
 * 
 * 总之，在titbit-loader 21.2.0 版本以后，支持自定义 / 路由的文件，默认为home.js的get请求。
 * 
 * 那么，在这个文件你最好只添加一个get请求作为主页。
 * 
 */

class home {

  constructor () {

    /**
     * 把路由参数设置为空，因为默认在RESTful模式，这个时候，默认的参数是/:id。
     * 
     */
    this.param = ''
  }

  async get (c) {
    /**
     * 设置cache-control表示缓存60秒，60秒内，浏览器不会请求后台，而是从缓存加载。
     * 不过刷新会重新加载。
     */
    c.setHeader('cache-control', 'public, max-age=60')
    c.setHeader('content-type', 'text/html; charset=utf-8')

    /**
     * c.service 属性会指向app.service。这通常被称为依赖注入。
     * 
     * 在其他编程语言环境中总被认为是一个比较复杂的概念，什么控制反转，依赖注入。
     * 
     * 在这里，你不需要考虑太多，只需要知道：
     *  在app初始化时，你可以把各种数据挂载到app.service上，同时还提供了app.addService接口辅助处理。
     *  比如通过app.addService('pagePath', __dirname + '/pages')设置默认的html页面所在目录。
     *  在请求上下文中，c.service会指向app.service，这样你就可以访问app.service上的所有数据。
     * 
     *  通过 app.service.pagePath = __dirname + '/pages' 和app.addService是一样的。
     *  需要特别注意的是：不要使用app.service = {}这种直接赋值的方式，因为这已经改变了app.service的指向。
     *  （换句话说，就好比在C中，指针的地址已经变了。）
     * 
     */

    //无论pagePath如何更改，此处代码不需要修改，这就实现了解耦和依赖同时满足。
    let html = await c.helper.readb( c.service.pagePath + '/home.html' )

    c.send(html)
  }


}

module.exports = home
