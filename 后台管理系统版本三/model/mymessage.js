'use strict'
let data = {}
class mymessage {
  constructor(mdb) {
    this.mdb = mdb || null
  }
  async post(c) {
    console.log('这是mymessage中传的数据，treeid ,uid', JSON.parse(c))
    data.treeid = JSON.parse(c).treeid;
    data.uid = JSON.parse(c).uid;
    console.log('这是处理后的data数据：', data)
    return 'ok'
  }
  async get(c) {
    // let sql = `select * from treemessage,users where treemessage.treeid=${data.treeid} and treemessage.uid=${data.uid} and treemessage.uid=users.uid`
    let sql = `select * from treemessage where treemessage.treeid=${data.treeid}`
    let r = await this.mdb.query(sql)
    let result = r['rows']

    return result
  }
}

module.exports = mymessage
