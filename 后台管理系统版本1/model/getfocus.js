'use strict'

let d = {}
class getfocus {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      let sql = 'select * from user_focus'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      console.log('这是得到的用户关注的具体内容', result)
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
      client.query('insert into user_focus values($1::int,$2::int)',[data.userid,data.treeid]).then(res=>{
        return {"userid":data.userid}
      })
    })
    return 'ok'
  }

}

module.exports = getfocus