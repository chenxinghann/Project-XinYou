'use strict'


class delstyle{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async post(c){
    let data=JSON.parse(c)
    this.mdb.connect().then(client=>{
      client.query('delete from lettertstyle where lettertstyleid=$1',[data.lettertstyleid]).then(res=>{
                  
      })
    })
  }
 
}

module.exports = delstyle
