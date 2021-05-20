'use strict'

class timeletter{
  constructor (mdb) {
    this.mdb = mdb || null
  }
  async get(){
    console.log('model')
    let sql='select * from timeletter'
    let r=await this.mdb.query(sql)
    let result=r['rows'];
    return result
  }
  
  async insert(d) {
    let data=JSON.parse(d)
    console.log('时光信数据',data)
    this.mdb.connect().then(client=>{
      client.query('insert into timeletter values($1::int,$2::text,$3::timestamp,$4::int,$5::int,$6::text)',[data.letterid,data.lettername,data.lettertime,data.fontid,data.backimgid,data.lcontent]).then(res=>{
        return {"letterid":data.letterid}
      })
    })
  }
}
module.exports = timeletter

