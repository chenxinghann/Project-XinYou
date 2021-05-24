'use strict'

class delcollection {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async post(c) {
    let data = JSON.parse(c)
    this.mdb.connect().then(client => {
      client.query('delete from user_shoucang where uid=$1', [data.uid]).then(res => {
        console.log('uid:' + data.uid)
      })
    })
    return 'ok'
  }
}

module.exports = delcollection
