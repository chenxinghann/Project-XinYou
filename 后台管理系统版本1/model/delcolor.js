'use strict'

class delcolor{
  constructor (mdb) {
    this.mdb = mdb || null
  }

  async post(c){
    let data=JSON.parse(c)
    this.mdb.connect().then(client=>{
      client.query('delete from lettertcolor where lettertcolorid=$1',[data.lettertcolorid]).then(res=>{
        
      })
    })
  }
 
}

module.exports = delcolor
