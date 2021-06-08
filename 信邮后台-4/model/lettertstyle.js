'use strict'

class lettertstyle {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async get() {
    try {
      // let sql='select * from lettertstyle'
      let sql = 'select * from font'
      let r = await this.mdb.query(sql)
      let result = r['rows']
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
    // let sql='select * from lettertstyle order by lettertstyleid'
    let sql = 'select * from font order by fontid'
    let r = await this.mdb.query(sql)
    let length = r['rows'].length
    let id = 0
    if (length == 0) {
      id = 1
    } else {
      id = r['rows'][length - 1].fontid + 1
    }
    this.mdb.connect().then(client => {
      // client.query('insert into lettertstyle values ($1::int,$2::varchar,$3::varchar)',[id,data.lettertname,data.lettertstyle]).then(res=>{
      client.query('insert into font values ($1::int,$2::text,$3::text)', [id, data.font,data.name]).then(res => {

      })
    })
  }

}

module.exports = lettertstyle
