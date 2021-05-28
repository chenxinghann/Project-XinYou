'use strict'
let uid=0
class shoucang{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async insert(d) {

    let data=JSON.parse(d)
    uid=data.userid
    //console.log('data数据：',data)
    let sql=`select * from user_shoucang where uid=${data.userid} and themeid=${data.themeid}`
    let r=await this.mdb.query(sql)
    let result=r['rows'] 
    if(Number(result)==0){
      this.mdb.connect().then(client=>{
        client.query('insert into user_shoucang values($1::int,$2::int)',[data.userid,data.themeid]).then(res=>{
          return res
        })
      })
    }
        
  }
 
  async get(c){
    let sql=`select * from user_shoucang where uid=${uid}`
    let r=await this.mdb.query(sql)
    let result=r['rows']
    return result
  }
 
}

module.exports = shoucang
