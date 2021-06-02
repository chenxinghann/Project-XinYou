'use strict'

class getmessage {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      let sql = 'select * from treemessage,tree,users where treemessage.messid=users.uid and treemessage.treeid=tree.treeid order by tree.treeid'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      console.log('这是得到的树洞留言的具体内容', result)
      if (result.rowCount <= 0) {
        return ('failed register', '出错了')
      }
      return result
    } catch (e) {
      return ('failed', 'error了')
    }
  }
  async insert(c) {
    let data = JSON.parse(c)
    console.log('添加的留言数据',data)
    let sql = 'select * from treemessage';
    let r = await this.mdb.query(sql);
    // let length = r['rows'].length
    let contentid = r['rows'].length + 1;
    this.mdb.connect().then(client=>{
      client.query('insert into treemessage values($1::int,$2::int,$3::int,$4::text,$5::int,$6::int)',[data.treeid,data.uid,data.messid,data.messcontent,data.stampid,contentid]).then(res=>{
        return {"treeid":data.treeid}
      })
    })
    return 'ok'

     // let data = JSON.parse(c)
    // console.log('添加的留言数据',data)
    // let sql = 'select * from review';
    // let r = await this.mdb.query(sql);
    // let reviewid = r['rows'].length + 1;
    // this.mdb.connect().then(client => {
    //   client.query('insert into review values($1::int,$2::text,$3::int,$4::int)', [data.publishid,data.reviewcontent, data.reviewuserid, reviewid]).then(res => {

    //   })
    // })
  }
  // async insert(d) {
  //   let data=JSON.parse(d)
  //   console.log('这是树洞留言接口传递的data数据：',data)
  //   // let sql=`select * from treemessage where treeid=${data.treeid} and uid=${data.uid} `;
  //   let sql = 'select * from treemessage'
    
  //   let r=await this.mdb.query(sql);
  //   let length = r['rows'].length
  //   let contentid = 0
  //   if (length == 0) {
  //     contentid = 1
  //   } else {
  //     contentid = r['rows'][length - 1].contentid + 1
  //   }
  //   // let contentid=r['rows'].length+1;
  //   this.mdb.connect().then(client=>{
  //     client.query('insert into treemessage values($1::int,$2::int,$3::int,$4::text,$5::int,$6::int)',[data.treeid,data.uid,data.messid,data.messcontent,data.stampid,contentid]).then(res=>{
  //       return res       
  //     })
  //   })
  // }
}

module.exports = getmessage