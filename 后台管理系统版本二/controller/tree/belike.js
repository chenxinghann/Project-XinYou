'use strict'

class belike{

    constructor () {
        this.param='/'
    }
    
    async post(c){
      console.log('这是传递给我的数据',c.body.toString())
        let data=c.body.toString();
        await c.service.model.belike.insert(data);
        c.send('留言成功')
    }
    
}

module.exports = belike
