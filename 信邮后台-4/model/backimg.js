'use strict'

class content {
  constructor (mdb) {
    this.mdb = mdb
  }

  async get (id) {
    console.log("id",id)
    try{
      let sql='select * from backimg order by backimgid asc'
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
  async post(data){
    console.log(data)
  }
  async insert(data) {

  }

  async delete (id) {
    
  }

}

module.exports = content
