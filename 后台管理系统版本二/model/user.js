'use strict'

class friendlist {
  constructor(mdb) {
    this.mdb = mdb
  }

  async get() {
    try {
      let sql = 'select * from users order by uid asc'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      if (result.rowCount <= 0) {
        return ('failed register', 'failed')
      }
      return result
    } catch (e) {
      return ('failed', 'friend/user出错了')
    }
  }
}

module.exports = friendlist
