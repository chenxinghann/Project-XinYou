'use strict'

let d = {}
class getmessage {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      let sql = 'select * from treemessage'
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
    console.log('添加的用户数据',data)
    this.mdb.connect().then(client=>{
      client.query('insert into treemessage values($1::int,$2::int,$3::int,$4::text,$5::int)',[data.treeid,data.uid,data.messid,data.messcontent,data.stampid]).then(res=>{
        return {"treeid":data.treeid}
      })
    })
    return 'ok'
  }

}

module.exports = getmessage