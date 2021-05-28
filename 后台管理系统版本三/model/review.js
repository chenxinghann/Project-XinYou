'use strict'
let d={}
class review {

  constructor (mdb) {
    this.mdb = mdb || null
  }

 
  async insert(c) {

    let data=JSON.parse(c)    
    let sql='select * from review';
    let r=await this.mdb.query(sql);
    let reviewid=r['rows'].length+1; 
    this.mdb.connect().then(client=>{
      client.query('insert into review values($1::int,$2::int,$3::int,$4::text)',[data.publishid,reviewid,data.reviewuserid,data.reviewcontent]).then(res=>{
           
      }) 
    })
    let sql1=`select * from publish,review,users where publish.publishid=review.publishid and review.reviewuserid=users.uid`
    let r1=await this.mdb.query(sql1)
    let result1=r1['rows']
    return result1

  }

}

module.exports = review
