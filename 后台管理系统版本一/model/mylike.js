'use strict'

let uid=0
let data={}
class mylike{

  constructor (mdb) {
    this.mdb = mdb || null
  }
  async insert(c){
    console.log('这是传递给我的uid',JSON.parse(c).uid)
    let data=JSON.parse(c)
    uid=data.uid

  }
  async get (c) {
    try{

      let sql=`select * from backimgs,users,tree,user_focus where users.uid=user_focus.treeid and tree.treeid=user_focus.treeid and tree.backimgid=backimgs.backimgid and user_focus.uid=${uid}`
      let r=await this.mdb.query(sql)
      let result=r['rows']
      if(result.rowCount<=0){
        return ('failed register',400)
      }
      console.log(result)
      return result

    }catch(e){
      return ('failed',400)
    }
  }
  

}

module.exports = mylike
