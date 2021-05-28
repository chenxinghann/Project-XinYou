'use strict'

class userlist {
  constructor(mdb) {
    this.mdb = mdb
  }

  async get(c) {
    let sql = 'select * from users';
    let r = await this.mdb.query(sql);
    let result = r['rows'];
    console.log(result)
  }

  async insert(data) {
    let sql = 'select * from users';
    let r = await this.mdb.query(sql);
    let result = r['rows'];
    let length = r['rows'].length;
    console.log(data.uname);
    let uid = 0;
    if (!data.uname) {
      return '没有用户名'
    }
    else {
      let d = 0
      result.map((item, idx) => {
        if (item.uname == data.uname) {
          d = 1
        }
      })
      if (d == 1) {
        return '你已经登录'
      } else {
        uid = r['rows'].length + 1;
        console.log('length:', length)
        console.log('uid：', uid)
        this.mdb.connect().then(client => {
          client.query('insert into users values($1::int,$2::text,$3::text,$4::int,$5::text,$6::text,$7::text)', [uid, data.uname, data.uimg, data.age, data.area, '', '']).then(res => {
            console.log(`res:${res}`)
          })
        })
        return uid
      }
    }
  }
}

module.exports = userlist




// 'use strict'

// class userlist {
//   constructor(mdb) {
//     this.mdb = mdb
//   }

//   async get(c){
//     let sql = 'select * from users';
//     let r = await this.mdb.query(sql);
//     let result = r['rows'];
//     console.log(result)
//   }

//   async insert(data) {
//     let sql = 'select * from users';
//     let r = await this.mdb.query(sql);
//     let result = r['rows'];
//     let length = r['rows'].length;
//     console.log(data.uname);
//     let uid = 0;
//     if (!data.uname) {
//       return '没有用户名'
//     }
//     //  else if (length == 0 && data.uimg && data.uname) {
//     //   uid = 1;
//     //   this.mdb.connect().then(client => {
//     //     client.query('insert into users values($1::int,$2::text,$3::text,$4::int,$5::text,$6::text,$7::text)', [uid, data.uname, data.uimg, data.age, data.area, data.interest, data.job]).then(res => {
//     //       console.log(`res:${res}`)
//     //     })
//     //   })
//     //   return uid
//     // } 
//     else {
//       let d = 0
//       result.map((item, idx) => {
//         // if (item.openid == data.openid) {
//         //   d = 1
//         // }
//         if (item.uname == data.uname) {
//           d = 1
//         }
//       })
//       if (d == 1) {
//         return '你已经登录'
//       } else {
//         // uid = r['rows'][length - 1].uid + 1;
//         uid = r['rows'].length + 1;
//         console.log('length:', length)
//         console.log('uid：', uid)
//         this.mdb.connect().then(client => {
//           client.query('insert into users values($1::int,$2::text,$3::text,$4::int,$5::text,$6::text,$7::text)', [uid, data.uname, data.uimg, data.age, data.area, '', '']).then(res => {
//             console.log(`res:${res}`)
//           })
//         })
//         return uid
//       }
//     }
//   }
// }

// module.exports = userlist