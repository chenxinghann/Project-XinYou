'use strict'

let d = {}
class getcollection {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      let sql = 'select * from user_shoucang'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      console.log('这是得到的用户收藏的具体内容', result)
      if (result.rowCount <= 0) {
        return ('failed register', '出错了')
      }
      return result

    } catch (e) {
      return ('failed', 'error')
    }
  }
  async insert(c) {
    let data = JSON.parse(c)
    console.log('添加的用户数据',data)
    this.mdb.connect().then(client=>{
      client.query('insert into user_shoucang values($1::int,$2::int,$3::int)',[data.uid,data.backimgid,data.stampid]).then(res=>{
        return {"uid":data.uid}
      })
    })
    return 'ok'
  }

}

module.exports = getcollection