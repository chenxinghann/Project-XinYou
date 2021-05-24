'use strict'
class belike{
  constructor (mdb) {
    this.mdb = mdb || null
  }

  async insert(d) {
    let data=JSON.parse(d)
    //console.log('data数据：',data)
    let sql=`select * from user_focus where uid=${data.userid} and treeid=${data.treeid}`
    let r=await this.mdb.query(sql)
    let result=r['rows'] 
    if(Number(result)==0){
      this.mdb.connect().then(client=>{
        client.query('insert into user_focus values($1::int,$2::int)',[data.userid,data.treeid]).then(res=>{
          return res
        })
      })
    }
  }
}

module.exports = belike
