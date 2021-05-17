'use strict'

class tree {
  constructor(mdb) {
    this.mdb = mdb
  }

  async insert(d) {
    //创建树洞需要插入的数据 uimg
    let data = JSON.parse(d)
    console.log('添加的树洞数据：', data)
    // let sql1 = `select * from tree where treeid=${data.uid}`
    // let r1 = await this.mdb.query(sql1)
    // let result1 = r1['rows'].length;
    let sql = `select * from users where uid=${data.uid}`
    let r = await this.mdb.query(sql)
    let result = r['rows']
    console.log('查询是否有该用户,这是result：', result)
    console.log('这是number（result）：', (result.uid))
    if (Number(result) == 0) {
      return '没有该用户'
    } 
    else if (result1 == 0) {
      this.mdb.connect().then(client => {
        client.query('insert into usertree values($1::int,$2::int)', [data.uid, data.treeid]).then(res => {
          console.log(res)
        })
        // client.query('insert into tree values($1::int,$2::varchar,$3::int,$4::int,$5::text)', [data.uid, data.treename, data.backimgid, data.maxnumber, data.treecontent]).then(res => {
        //   console.log(res)
        // })
      })
      return {
        "uid": data.uid,
        'treeid': data.treeid,
      }
    }
    // else {
    //   return '你已创建树洞'
    // }
  }
}

module.exports = tree





















// 'use strict'

// class tree {
//   constructor(mdb) {
//     this.mdb = mdb
//   }

//   async insert(d) {
//     //创建树洞需要插入的数据 uimg 
//     let data = JSON.parse(d)
//     console.log(data)
//     // let sql1 = `select * from tree where treeid=${data.uid}`
//     // let r1 = await this.mdb.query(sql1)
//     // let result1 = r1['rows'].length;
//     let sql = `select * from users where uid=${data.uid}`
//     let r = await this.mdb.query(sql)
//     let result = r['rows']
//     console.log('查询是否有该用户,这是result：', result)
//     console.log('这是number（result）：', (result.uid))
//     if (Number(result) == 0) {
//       return '没有该用户'
//     } else if (result1 == 0) {
//       this.mdb.connect().then(client => {
//         client.query('insert into tree values($1::int,$2::varchar,$3::int,$4::int,$5::text)', [data.uid, data.treename, data.backimgid, data.maxnumber, data.treecontent]).then(res => {
//           console.log(res)
//         })
//       })
//       return { 'treeid': data.uid }
//     } else {
//       return '你已创建树洞'
//     }
//   }
// }

// module.exports = tree
