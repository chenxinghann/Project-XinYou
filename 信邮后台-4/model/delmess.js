'use strict'

class delmess {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async post(c) {
    let data = JSON.parse(c)
    this.mdb.connect().then(client => {
      // client.query('delete from tree_message where treeid=$1', [data.treeid]).then(res => {
      client.query('delete from message_answer where id=$1', [data.id]).then(res => {
        console.log('洞主回复id:' + data.id)
        return res
      })
    })
    return 'ok'
  }
}

module.exports = delmess
