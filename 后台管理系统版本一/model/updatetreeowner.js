'use strict'

class treelist {
  constructor(mdb) {
    this.mdb = mdb || null
  }

  async update(c) {
    let data = JSON.parse(c)
    try {

      this.mdb.connect().then(client => {
        client.query('update tree set treename=$1,backimgid=$2,maxnumber=$3 where treeid=$4', [data.treename, data.backimgid, data.maxnumber, data.treeid]).then(res => {
          return client.query('select * from tree where treeid=$1', [data.treeid]);
        })
      })
      if (result.rowCount <= 0) {
        return ('failed register', 400)
      }


    } catch (e) {
      return ('failed', 400)
    }
  }

}

module.exports = treelist
