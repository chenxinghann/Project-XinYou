'use strict'

class treemessage{

    constructor () {
        this.param='/'
    }

    async post(c){
        let data=await c.service.model.treemessage.insert(c.body.toString())
        let d={
                'msg':'创建树洞成功',
                'data':data,
                'code':1
        }
        c.send(d)
    }
    async get(c){
        let data=await c.service.model.treemessage.get()
        let d={
                'data':data,
                'code':1
        }
        c.send(d)
    }

}
module.exports = treemessage
