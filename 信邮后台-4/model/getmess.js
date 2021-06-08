'use strict'

let d = {}
class getmess {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      // let sql = 'select * from tree_message'
      let sql = 'select * from tree_message'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      console.log('这是得到的洞主回复的具体内容', result)
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
      client.query('insert into tree_message values($1::int,$2::int,$3::int,$4::text)',[data.treeid,data.userid,data.messagecontentid,data.messagecontent]).then(res=>{
        return {"treeid":data.treeid}
      })
    })
    return 'ok'
  }

}

module.exports = getmess