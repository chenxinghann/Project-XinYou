'use strict'

class info {
  constructor () {

  }

  /**
   * 
   * list也是GET请求，只是路由是不带参数/:id的。
   * 
   * 最后对应的路由是 /user/info。
   * 这在接口开发中，通常是用于获取列表的， 当然你也可以用于其他用途。
   * 
   * @param {object} c 
   */

  async list (c) {
    let users = []

    let u

    for (let k in c.service.testUser) {
      u = c.service.testUser[k]

      users.push({
        id : u.id,
        nickname : u.nickname
      })

    }

    c.send(users)

  }

  /**
   * 
   * 默认this.param是/:id。
   * 也就是说，最后添加的GET请求的路由是 /user/info/:id。
   * 
   * @param {object} c 请求上下文。
   */

  async get (c) {
    if (c.param.id === 'self') {
      c.param.id = c.box.user.id
    }
    let u

    for (let k in c.service.testUser) {
      u = c.service.testUser[k]
      if (u.id === c.param.id) {
        c.send({
          id : u.id,
          nickname : u.nickname,
          username : k
        })
        return
      }
    }

    //自从v21.8.1开始，send支持第二个参数作为状态码
    c.send('not found', 404)
  }
}

module.exports = info
