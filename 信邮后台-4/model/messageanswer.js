'use strict'

class messageanswer {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async post(d) {
    let data = JSON.parse(d)
    console.log('这是洞主回复接口，传递给我的数据treeid userid contentid answer', data)
    try {
      this.mdb.connect().then(client => {
        client.query('insert into message_answer values($1::int,$2::int,$3::int,$4::text)', [data.treeid, data.userid, data.messagecontentid, data.answer]).then(res => {
          return res
        })
      })
    } catch (e) {
      return 'fail'
    }
  }
  async get() {
    let sql = 'select * from message_answer order by treeid asc'
    let r = await this.mdb.query(sql)
    let result = r['rows']
    return result
  }
}

module.exports = messageanswer
