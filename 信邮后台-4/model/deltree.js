'use strict'

class deltree {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async post(c) {
    let data = JSON.parse(c)
    this.mdb.connect().then(client => {
      client.query('delete from tree where treeid=$1', [data.treeid]).then(res => {
        console.log('treeid:' + data.treeid)
      })
    })
    return 'ok'
  }
}

module.exports = deltree
