'use strict'

class treemessage{
  constructor (mdb) {
    this.mdb = mdb || null
  }

  async insert(d) {
    let data=JSON.parse(d)
    console.log('这是树洞留言接口传递的data数据：',data)
    // let sql=`select * from treemessage where treeid=${data.treeid} and uid=${data.uid} `;
    let sql = 'select * from treemessage'
    
    let r=await this.mdb.query(sql);
    let length = r['rows'].length
    let contentid = 0
    if (length == 0) {
      contentid = 1
    } else {
      contentid = r['rows'][length - 1].contentid + 1
    }
    // let contentid=r['rows'].length+1;
    this.mdb.connect().then(client=>{
      client.query('insert into treemessage values($1::int,$2::int,$3::int,$4::text,$5::int,$6::int)',[data.treeid,data.uid,data.messid,data.messcontent,data.stampid,contentid]).then(res=>{
        return res       
      })
    })
  }
  async get(){
    // let sql='select * from treemessage,stamps where treemessage.stampid=stamps.stampid order by treemessage.contentid asc'
    let sql='select * from treemessage order by treemessage.contentid asc'
    let r=await this.mdb.query(sql)
    let result=r['rows']
    return result
  }
}

module.exports = treemessage
