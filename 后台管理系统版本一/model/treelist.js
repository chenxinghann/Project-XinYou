'use strict'

class treelist{
  constructor (mdb) {
    this.mdb = mdb
  }

  async get () {
    try{
      let sql='select * from backimg,tree,users where backimg.backimgid=tree.backimgid and users.uid=tree.treeid' 
      let r=await this.mdb.query(sql)
      let result=r['rows']
      console.log(result)
      return result

    }catch(e){
      return ('failed','tree/treelist出错了')
    }
  }
}

module.exports = treelist
