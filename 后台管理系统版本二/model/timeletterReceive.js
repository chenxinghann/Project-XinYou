'use strict'

class timeletterReceive {
  constructor(mdb) {
    this.mdb = mdb || null
  }
  async get() {
    console.log('model');
    // let myDate=new Date();
    // let myDate = Date.now();
    // console.log(Date.now())
    function add0(m) { return m < 10 ? '0' + m : m }
    function format(shijianchuo) {
      //shijianchuo是整数，否则要parseInt转换
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
    }
    let date = format(Date.now())
    console.log(date)
    let sql = `select * from timeletter where timeletter.lettertime<timestamp '${date}'`;
    let r = await this.mdb.query(sql)
    let result = r['rows'];
    return result
  }
  async insert(d) {
    let data = JSON.parse(d)
    console.log('时光信数据', data)
    this.mdb.connect().then(client => {
      client.query('insert into timeletter values($1::int,$2::text,$3::timestamp,$4::int,$5::int,$6::text)', [data.letterid, data.lettername, data.lettertime, data.fontid, data.backimgid, data.lcontent]).then(res => {
        return { "letterid": data.letterid }
      })
    })
  }
}
module.exports = timeletterReceive
