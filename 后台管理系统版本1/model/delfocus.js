'use strict'

class delfocus {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async post(c) {
    let data = JSON.parse(c)
    this.mdb.connect().then(client => {
      client.query('delete from user_focus where userid=$1', [data.userid]).then(res => {
        console.log('userid:' + data.userid)
      })
    })
    return 'ok'
  }
}

module.exports = delfocus
