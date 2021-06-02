'use strict'
let data = {}
class seeanswer {
  constructor(mdb) {
    this.mdb = mdb || null
  }
  async post(c) {
    console.log('----------------')
    console.log('这是seeanswer的数据，有userid', JSON.parse(c))
    data.userid = JSON.parse(c).userid;
    return 'ok'
  }
  async get(c) {
    // let sql = `select * from tree_message,message_answer where tree_message.userid=${data.userid} and message_answer.treeid=tree_message.treeid and tree_message.userid=message_answer.userid and message_answer.messagecontentid=tree_message.messagecontentid`
    let sql = `select * from treemessage,message_answer where treemessage.userid=${data.userid} and message_answer.treeid=treemessage.treeid and treemessage.userid=message_answer.userid and message_answer.messagecontentid=treemessage.messagecontentid`
    let r = await this.mdb.query(sql)
    let result = r['rows']
    return result
  }
}

module.exports = seeanswer
