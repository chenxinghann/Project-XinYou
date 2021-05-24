'use strict'

class delshoucang{

    constructor () {
        this.param='/'
    }
    async post(c){
      console.log('这是删除收藏的数据uid themeid：',c.body.toString())
      let data=await c.service.model.delshoucang.post(c.body.toString());
      let d={
        msg:'delete success',
        data:data,
        code:1
      }
      c.send(d);
    }
}

module.exports = delshoucang
