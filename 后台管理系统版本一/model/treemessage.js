'use strict'


class treemessage{

  constructor (mdb) {
    this.mdb = mdb || null
  }

  async insert(d) {
    let data=JSON.parse(d)
    console.log('这是树洞留言接口传递的data数据：',data)
    let sql=`select * from tree_message where treeid=${data.treeid} and userid=${data.userid}`;
    let r=await this.mdb.query(sql);
    let messagecontentid=r['rows'].length+1;
    this.mdb.connect().then(client=>{
      client.query('insert into tree_message values($1::int,$2::int,$3::int,$4::text,$5::text)',[data.treeid,data.userid,messagecontentid,data.messagecontent,data.stamp]).then(res=>{
        return res       
      })
    })
   
    
    //}else{
      //return '你已创建树洞'
    //}
  }
  async get(){
    let sql='select * from tree_message order by treeid asc'
    let r=await this.mdb.query(sql)
    let result=r['rows']
    return result
  }
 
}

module.exports = treemessage
