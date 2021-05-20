'use strict'
let uid=0
class delshoucang{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async post(c){
    let data=JSON.parse(c)
    this.mdb.connect().then(client=>{
      client.query('delete from user_shoucang where uid=$1 and themeid=$2',[data.userid,data.themeid]).then(res=>{
        console.log('删除成功')
      })
    })
    return 'delete success'
  }
   
}

module.exports = delshoucang
