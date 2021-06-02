'use strict'

class stamp{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get () {
    try{
      let sql='select * from stamps'
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

module.exports = stamp
