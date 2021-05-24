'use strict'

class getusers {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get(c) {
    try {
      let sql = 'select * from users order by uid asc'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      console.log('这是得到的用户具体内容', result)
      if (result.rowCount <= 0) {
        return ('failed register', 400)
      }
      return result

    } catch (e) {
      return ('failed', 400)
    }
  }
  async insert(c) {
    let data = JSON.parse(c)
    console.log('添加的用户数据',data)
    this.mdb.connect().then(client=>{
      client.query('insert into users values($1::int,$2::text,$3::text,$4::int,$5::text,$6::text,$7::text)',[data.uid,data.uname,data.uimg,data.age,data.area,data.interest,data.job]).then(res=>{
        return {"uid":data.uid}
      })
    })
    return 'ok'
  }

}

module.exports = getusers