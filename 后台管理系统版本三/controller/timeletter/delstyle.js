'use strict'

class delstyle{

    constructor () {
        this.param='/'
    }
    async post(c){
      console.log('这是删除lettertstyle的数据',c.body.toString())
        let data=c.service.model.delstyle.post(c.body.toString())
        c.send(data)
    }
}

module.exports = delstyle
