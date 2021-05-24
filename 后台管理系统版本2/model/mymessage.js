'use strict'
let data={}
class mymessage{
  constructor (mdb) {
    this.mdb = mdb || null
  }
  async post(c){
   console.log('这是mymessage中穿的数据，treeid ,userid',JSON.parse(c))
    data.treeid=JSON.parse(c).treeid;
    data.userid=JSON.parse(c).userid;
    console.log('这是处理后的data数据：',data)
    return 'ok'
  }
  async get(c) { 
      let sql=`select * from tree_message,users where tree_message.treeid=${data.treeid} and tree_message.userid=${data.userid} and tree_message.userid=users.uid`
      let r=await this.mdb.query(sql)
      let result=r['rows']
      
      return result

  }
 
}

module.exports = mymessage
