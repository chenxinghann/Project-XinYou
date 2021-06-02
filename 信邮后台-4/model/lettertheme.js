'use strict'

class lettertheme{
  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get () {
      let sql='select * from lettertheme'
      let r=await this.mdb.query(sql)
      let result=r['rows']
      let sql1=`select backimg.backimg from backimg,lettertheme where backimg.backimgid=lettertheme.backimgid`
      let r1=await this.mdb.query(sql1)
      let result1=r1['rows']
      result.map((item,idx)=>{
        result[idx].backimg=result1[idx].backimg
      })    
      if(result.rowCount<=0){
        return ('failed register','出错了')
      }
      return result
  }
}

module.exports = lettertheme
