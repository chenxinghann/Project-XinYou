'use strict'

class updatemineinf{

    constructor () {
        this.param='/'
    }
    async put(c) {
      console.log('这是要更改的个人信息数据：',c.body.toString())
        let data=await c.service.model.updatemineinf.update(c.body.toString())
        let d={
          'msg':'put success',
          'data':data,
          'code':1
        }
        c.send(d)
    }
}

module.exports = updatemineinf
