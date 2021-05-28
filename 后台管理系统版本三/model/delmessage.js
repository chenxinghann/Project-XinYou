'use strict'

class delmessage {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async post(c) {
    let data = JSON.parse(c)
    this.mdb.connect().then(client => {
      client.query('delete from treemessage where contentid=$1', [data.contentid]).then(res => {
        console.log('contentid:' + data.contentid)
      })
    })
    return 'ok'
  }
}

module.exports = delmessage
