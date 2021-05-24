'use strict'

let data = {}
class content {
  constructor(mdb) {
    this.mdb = mdb
  }
  async post(c) {
    console.log('这是洞主查看其他人的投档记录 需要提交字段treeid', JSON.parse(c))
    data.treeid = JSON.parse(c).treeid
  }
  async get() {
    console.log('这是data数据：', data)
    try {
      let sql = `select * from treemessage,users where treemessage.treeid=${data.treeid} and treemessage.uid=users.uid`
      let r = await this.mdb.query(sql)
      let result = r['rows']

      console.log(result)
      if (result.rowCount <= 0) {
        return ('failed register','出错了')
      }
      return result

    } catch (e) {
      return ('failed', '出错了')
    }
  }
}

module.exports = content
