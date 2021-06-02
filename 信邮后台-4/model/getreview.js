'use strict'
let d = {}
class getreview {

  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      let sql = `select * from review,users where review.reviewuserid=users.uid and review.publishid=${d.publishid}`
      let r = await this.mdb.query(sql)
      let result = r['rows']
      console.log('这是得到的动态具体内容', result)
      if (result.rowCount <= 0) {
        return ('failed register', '出错了')
      }
      return result
    } catch (e) {
      return ('failed', 'error了')
    }
  }
  async insert(c) {
    console.log('这是传递给我的publishid',JSON.parse(c))
    let data=JSON.parse(c)
    d.publishid=data.publishid
   return 'ok' 
  }
  // async insert(c) {
  //   let data = JSON.parse(c)
  //   console.log('添加的动态评论数据', data)
  //   // let sql = `select * from review,users where review.reviewuserid=users.uid and review.publishid=${d.publishid}`
  //   // let r = await this.mdb.query(sql)
  //   // let result = r['rows']
  //   // console.log(result)
  //   // let length = r['rows'].length;
  //   // let reviewid = r['rows'][length-1].reviewid + 1;

  //   this.mdb.connect().then(client => {
  //     client.query('insert into review values($1::int,$2::text,$3::int)', [data.publishid, data.reviewcontent, data.reviewuserid]).then(res => {
  //       // return { "reviewid": data.reviewid }
  //       return res
  //     })
  //   })
  //   return 'ok'
  // }
}

module.exports = getreview
