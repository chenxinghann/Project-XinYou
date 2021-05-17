'use strict'

class timeletter{
  constructor (mdb) {
    this.mdb = mdb || null
  }
  async get(){
    console.log('model')
    //let sql='select * from timeletter,users where timeletter.uid=users.uid'
    let sql="select * from timeletter";
    let r=await this.mdb.query(sql)
    let result=r['rows'];
    console.log(result)
    return result
  }
  
  async insert(d) {
    let data=JSON.parse(d)
    console.log('时光信数据',data)
    // let sql=`select * from timeletter where uid=${data.uid} order by letterid asc`
    let sql=`select * from timeletter order by letterid asc`
    let r=await this.mdb.query(sql)
    let length=r['rows'].length
    let letterid=0
    if(length==0){
      letterid=1
    }else{
      letterid=r['rows'][length-1].letterid+1
    }
    // console.log('letterid:',letterid)
    
    this.mdb.connect().then(client=>{
      client.query('insert into timeletter values($1::int,$2::text,$3::timestamp,$4::int,$5::int,$6::text)',[letterid,data.lettername,data.lettertime,data.fontid,data.backimgid,data.lcontent]).then(res=>{
        return {"letterid":letterid}
      })
      // client.query('insert into timeletter values($1::int,$2::int,$3::int,$4::int,$5::int,$6::int,$7::varchar,$8::varchar,$9::int)',[data.uid,letterid,data.lettertid,data.themeid,data.backimgid,data.content,data.lettertime,data.lettertcolor,data.lettertstyleid]).then(res=>{
      //   return {"letterid":letterid}
      // })
    })
  }
}

module.exports = timeletter
