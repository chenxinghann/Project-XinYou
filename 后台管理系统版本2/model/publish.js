'use strict'
class publish {
  constructor(mdb) {
    this.mdb = mdb || null
  }
  async insert(c) {
    let data = JSON.parse(c)

    let sql = 'select * from publish order by publishid';
    let r = await this.mdb.query(sql);
    let length = r['rows'].length
    let publishid = 0
    if (length == 0) {
      publishid = 1
    } else {
      publishid = r['rows'][length - 1].publishid + 1
    }
    this.mdb.connect().then(client => {
      client.query('insert into publish values($1::int,$2::int,$3::timestamp,$4::text,$5::text)', [publishid, data.uid, data.time, data.publishcontent, data.publishimg]).then(res => {

      })
    })
    return '插入数据成功'
  }
  async get(c) {
    try {
      let sql = 'select * from publish,users where publish.uid=users.uid'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      if (result.rowCount <= 0) {
        return ('failed register', 400)
      }
      return result

    } catch (e) {
      return ('failed', 400)
    }
  }
  async delete(c) {
    let data = JSON.parse(c)
    this.mdb.connect().then(client => {
      client.query('delete from publish where publish=$1', [data.publishid]).then(res => {

      })
    })
  }

}
module.exports = publish
