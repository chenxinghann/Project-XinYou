'use strict'

class treelist{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async get (c) {
    try{
      let sql='select * from tree'
      let r=await this.mdb.query(sql)
      let result=r['rows']
      let treeid=JSON.parse(c).treeid
      let num=0;
      let data=[]
      //将每一项中的backimgid匹配到backimg，并添加到每一项的backimg中
      let sql1=`select backimgs.backimg from backimgs,tree where backimgs.backimgid=tree.backimgid`
      let r1=await this.mdb.query(sql1)
      let result1=r1['rows']
      //console.log(result1);//[{backimg:'1.jpg'}]
      result.map((item,idx)=>{
        result[idx].backimg=result1[idx].backimg
      })
      console.log(result)      
      let r2=(await this.mdbg.query(sql2))['rows']
      console.log(r2) 
      if(result.rowCount<=0){
        return ('failed register',400)
      }
      result.map((item,idx)=>{
        if(item.treeid==treeid){
          num=idx
          return false
        }
      })
      console.log('这是num:',num)
      return result[num]

    }catch(e){
      return ('failed',400)
    }
  }
 
}

module.exports = treelist
