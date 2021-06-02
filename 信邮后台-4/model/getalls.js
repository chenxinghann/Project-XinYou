'use strict'

class getalls{
  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get (c) {
    try{
      let sql='select * from user_shoucang'
      let r=await this.mdb.query(sql)
      let result=r['rows']
      if(result.rowCount<=0){
        return ('failed register','出错了')
      }
      return result

    }catch(e){
      return ('failed','又出错了')
    }
  }
}

module.exports = getalls
