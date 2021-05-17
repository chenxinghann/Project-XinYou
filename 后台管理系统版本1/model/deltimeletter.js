'use strict'

class deltimeletter{

  constructor (mdb) {
    this.mdb = mdb || null
  }
     
  async post(c){
    let data=JSON.parse(c)
    this.mdb.connect().then(client=>{
      client.query('delete from timeletter where uid=$1 and letterid=$2',[data.uid,data.letterid]).then(res=>{
        return 'ok'
      })
    })
  }
  
 
}

module.exports = deltimeletter
