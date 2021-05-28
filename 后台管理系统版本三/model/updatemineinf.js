'use strict'

class updatemineinf{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async update(c) {
    let data=JSON.parse(c)
    try{
      
      this.mdb.connect().then(client=>{
        client.query('update users set uname=$1,uimg=$2,treeid=$3,age=$4,job=$5,area=$6,interest=$7 where uid=$8',[data.uname,data.uimg,data.uid,data.age,data.job,data.area,data.interest,data.uid]).then(res=>{
          return client.query('select * from users where uid=$1',[data.uid]);
      })
        
      })
      if(result.rowCount<=0){
        return ('failed register',400)
      }
      

    }catch(e){
      return ('failed',400)
    }
  }
 
}

module.exports = updatemineinf
