'use strict'

class uduser {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async update(c) {
    let data = JSON.parse(c)
    try {
      this.mdb.connect().then(client => {
        client.query('update users set uid=$1,uname=$2,uimg=$3,age=$4,area=$5,interest=$6,job=$7 where uid=$8', [data.uid, data.uname, data.uimg, data.age, data.area, data.interest, data.job, data.uid]).then(res => {
          return client.query('select * from users where uid=$1', [data.uid]);
        })
      })
      if (result.rowCount <= 0) {
        return ('failed register', "出错了")
      }
    } catch (e) {
      return ('failed', "error")
    }
  }
  async get(c) {
    try {
      let sql = 'select * from users order by uid asc'
      let r = await this.mdb.query(sql)
      let result = r['rows']
      if (result.rowCount <= 0) {
        return ('failed register', '出错了')
      }
      return result
    } catch (e) {
      return ('failed', 'error')
    }
  }
}

module.exports = uduser

