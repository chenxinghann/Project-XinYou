'use strict'

class tree {
  constructor(mdb) {
    this.mdb = mdb
  }

  async insert(d) {
    let data = JSON.parse(d)
    console.log('添加的树洞数据：', data)
    let sql0 = `select * from tree`
    let r0 = await this.mdb.query(sql0)
    let treeid = r0['rows'].length + 1;

    let sql = `select * from users where uid=${data.uid}`
    let r = await this.mdb.query(sql)
    let result = r['rows']
    console.log('查询是否有该用户,这是result：', result)
    if (result == '') {
      return '没有该用户'
    } else {
      this.mdb.connect().then(client => {
        client.query('insert into tree values($1::int,$2::text,$3::int,$4::int,$5::text,$6::int)', [treeid, data.treename, data.backimgid, data.maxnumber, data.treecontent,data.uid]).then(res => {
          console.log(res)
        })
      })
      return {
        "uid": data.uid,
        'treeid': data.treeid,
      }
    }
  }
}

module.exports = tree
