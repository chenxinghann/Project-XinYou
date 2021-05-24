'use strict'

class message{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async insert(d) {
    let data=JSON.parse(d)
    let sql2=`select from users where uid=${data.uid}`
    let r2=await this.mdb.query(sql2)['rows']
    if(!r2){
      let sql=`select uimg from users where uid=${data.uid}`;
      let r=await this.mdb.query(sql);
      let uimg=r['rows'][0].uimg;
      this.mdb.connect().then(client=>{
        client.query('insert into tree values($1::int,$2::varchar,$3::int,$4::int,$5::text,$6::text,$7::int,$8::int,$9::int)',[data.uid,data.treename,data.backimgid,data.maxnumber,uimg,data.treecontent,1,0,0]).then(res=>{
          
        })
      })
      return {'treeid':data.uid}
    }else{
      return 'fail'
    }
  }
 
}

module.exports = message
