'use strict'
class getpublish{
    constructor () {
        this.param='/'
    }
    async get(c){
      let data=await c.service.model.getpublish.get(c.body.toString());
      let d={
        data:data,
        code:1
      }
      c.send(d);
    }
    async post(c) {
        let data = await c.service.model.getpublish.insert(c.body.toString());
        let d = {
          'msg':"插入数据成功",
          'data': data,
           'code': 1
        }
        c.send(d)
      }    
}
module.exports = getpublish
