'use strict'



class lettertcolor{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get () {
    try{
      let sql='select * from lettertcolor'
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
  async insert(c){
    let data=JSON.parse(c)
    let sql='select * from lettertcolor order by lettertcolorid asc'
    let r=await this.mdb.query(sql)
    let length=r['rows'].length
    let id=0
    if(length==0){
      id=1
    }else{
      id=r['rows'][length-1].lettertcolorid+1
    }
    this.mdb.connect().then(client=>{
      client.query('insert into lettertcolor values ($1::int,$2::varchar)',[id,data.lettertcolor]).then(res=>{
                  
      })
    })
  }
   
}

module.exports = lettertcolor
