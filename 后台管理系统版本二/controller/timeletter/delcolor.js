'use strict'

class delcolor{

    constructor () {
        this.param='/'
    }
    
    async post(c){
      console.log('这是传递给我的删除颜色的数据lettertcolorid:',c.body.toString())
        let data=c.service.model.delcolor.post(c.body.toString())
        c.send(data)
    }
}

module.exports = delcolor
