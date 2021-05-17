'use strict'
class dellike{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async post(c){
    let data=JSON.parse(c)
    console.log('这是要删除的数据',data)
    this.mdb.connect().then(client=>{
      client.query('delete from user_focus where uid=$1 and treeid=$2',[data.userid,data.treeid]).then(res=>{
        console.log('删除成功')
      })
    })
    return 'delete success'
  }

 
}

module.exports = dellike
