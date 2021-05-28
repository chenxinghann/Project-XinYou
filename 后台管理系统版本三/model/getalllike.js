'use strict'
class getalllike{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get (c) {
    try{
      let sql='select * from user_focus order by uid asc'
      let r=await this.mdb.query(sql)
      let result=r['rows']
      if(result.rowCount<=0){
        return ('failed register',400)
      }
      return result

    }catch(e){
      return ('failed',400)
    }
  }
}

module.exports = getalllike
