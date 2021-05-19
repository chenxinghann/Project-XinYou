'use strict'
let d={}
class getreview {

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get (c) {
    try{
      let sql=`select * from review,users where review.reviewuserid=users.uid and review.publishid=${d.publishid}`
      let r=await this.mdb.query(sql)
      let result=r['rows']
      console.log('这是得到的动态具体内容',result)
      if(result.rowCount<=0){
        return ('failed register',400)
      }
      return result

    }catch(e){
      return ('failed',400)
    }
  }
  async insert(c) {
    console.log('这是传递给我的publishid',JSON.parse(c))
    let data=JSON.parse(c)
    d.publishid=data.publishid
   return 'ok' 
  }

}

module.exports = getreview
