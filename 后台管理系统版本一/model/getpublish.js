'use strict'
class getpublish{

  constructor (mdb) {
    this.mdb = mdb || null
  }
  async get (c) {
    try{
      let sql='select * from publish order by publishid asc'
      let r=await this.mdb.query(sql)
      let result=r['rows']
      console.log(result);
      if(result.rowCount<=0){
        return ('failed register',400)
      }
      return result
    }catch(e){
      return ('failed',400)
    }
  }
  async insert(d) {
    try{
    let data=JSON.parse(d)
    console.log('添加的用户数据',data)
    let sql=`select * from publish order by publishid asc`
    let r=await this.mdb.query(sql)
    let length=r['rows'].length
    let publishid=0
    if(length==0){
      publishid=1
    }else{
      publishid=r['rows'][length-1].publishid+1
    }
    
    this.mdb.connect().then(client=>{
      client.query('insert into publish values($1::int,$2::int,$3::date,$4::text,$5::text)',[publishid,data.uid,data.time,data.publishcontent,data.publishimg]).then(res=>{
        return {"publishid":publishid}
      })
    })
  }catch(e){
    return ("failed",400)
  }
}
}
module.exports = getpublish
