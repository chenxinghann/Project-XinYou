'use strict'
// const gohttp = require('gohttp').httpcli

class getimg {
  constructor(mdb) {
    this.mdb = mdb
  }

  async insert(c) {
    // let data = JSON.parse(c.res.body)
    const act = require('../access_token')

    process.chdir('D:/workspace/3_1/项目实训/2-信邮后台/public/images')
    //默认第二个参数为0，表示获取索引值为0的文件
    let f = c.getFile('media')

    if (f === null) {
      c.status(400)
      c.res.body = 'Bad Request: not found media'
      return
    }
    let filename = `${c.helper.makeName()}`
      + `${c.helper.extName(f.filename)}`
    //把上传的文件写入文件
    try {
      await c.moveFile(f, filename)
    } catch (err) {
      console.log(`error:${err}`)
    }
    c.res.body = filename
    let tk = await act.getToken()
    if (tk.access_token === undefined) {
      c.status(500)
      c.res.body = 'Failed to get access_token'
      return
    }
    let imgcheck_api = `https://api.weixin.qq.com/wxa/img_sec_check`
      + `?access_token=${tk.access_token}`
    let imgcheck = await gohttp.post(imgcheck_api, {
      //直接把原始的body数据传递过去
      //c.rawBody中存储了HTTP协议格式的上传数据
      rawBody: c.rawBody,
      //把客户端请求的header传递给微信服务端
      headers: c.headers
    })
    //把请求结果转换为文本格式返回
    c.res.body = imgcheck.text()
    console.log(filename)
    // console.log(c.res.body)
    c.send(filename);
    let data = JSON.parse(filename)
    console.log('添加的上传图片', data)
  }
}
module.exports = getimg





















// 'use strict'

// // process.chdir(__dirname)
// const fs = require('fs')
// const gohttp = require('gohttp').httpcli

// class getimg {
//   constructor(mdb) {
//     this.mdb = mdb
//   }

//   async insert(c) {
//     process.chdir('D:\workspace\3_1\项目实训\2-信邮后台\public\images')
//     try {
//       fs.accessSync('../wxkey.js')
//     } catch (err) {
//       let wxkey = 'module.exports = {\n'
//         + `  appid : '换成你的APPID',\n`
//         + `  secret : '换成你的AppSecret'\n`
//         + '}';

//       fs.writeFileSync('../wxkey.js', wxkey, 'utf8');
//       console.log('你还没有配置wxkey.js中的appid和secret，请填写后再次运行服务');
//       process.exit(0);
//     }

//     const act = require('../access_token')

//     let f = c.getFile('media')
//     if (f === null) {
//       c.status(400)
//       c.res.body = 'Bad Request: not found media'
//       return
//     }
//     let filename = `${c.helper.makeName()}`
//       + `${c.helper.extName(f.filename)}`
//     //把上传的文件写入文件
//     try {
//       await c.moveFile(f, filename)
//     } catch (err) {
//       console.log(err)
//     }
//     //c.res.body = filename
//     let tk = await act.getToken()

//     if (tk.access_token === undefined) {
//       c.status(500)
//       c.res.body = 'Failed to get access_token'
//       return
//     }

//     let imgcheck_api = `https://api.weixin.qq.com/wxa/img_sec_check`
//       + `?access_token=${tk.access_token}`

//     let imgcheck = await gohttp.post(imgcheck_api, {
//       //直接把原始的body数据传递过去
//       //c.rawBody中存储了HTTP协议格式的上传数据
//       rawBody: c.rawBody,

//       //把客户端请求的header传递给微信服务端
//       headers: c.headers
//     })

//     //把请求结果转换为文本格式返回
//     c.res.body = imgcheck.text()
//   }
// }

// module.exports = getimg

// 'use strict';

// process.chdir(__dirname)
// process.chdir('/static/images')

// const titbit = require('titbit')

// const gohttp = require('gohttp').httpcli

// const fs = require('fs')

// /**
//  * 以下try catch的代码段是为了方便学生学习测试使用，会自动生成wxkey.js文件，
//  * 如果自己搞定wxkey.js模块，则不需要，更改代码也很容易。
//  */
// try {
//   fs.accessSync('./wxkey.js')
// } catch (err) {
//   let wxkey = 'module.exports = {\n'
//     + `  appid : '换成你的APPID',\n`
//     + `  secret : '换成你的AppSecret'\n`
//     + '}';

//   fs.writeFileSync('./wxkey.js', wxkey, 'utf8');
//   console.log('你还没有配置wxkey.js中的appid和secret，请填写后再次运行服务');
//   process.exit(0);
// }

// const act = require('./access_token')

// const app = new titbit({
//   //开启调试模式，会输出错误信息
//   debug: true,

//   //启用全局日志
//   globalLog: true
// })


// app.post('/img-check', async c => {
//   //默认第二个参数为0，表示获取索引值为0的文件
//   let f = c.getFile('media')

//   if (f === null) {
//     c.status(400)
//     c.res.body = 'Bad Request: not found media'
//     return
//   }
//   let filename = `${c.helper.makeName()}`
//     + `${c.helper.extName(f.filename)}`
//   //把上传的文件写入文件
//   try {
//     await c.moveFile(f, filename)
//   } catch (err) {
//     console.log(err)
//   }

//   c.res.body = filename

//   let tk = await act.getToken()

//   if (tk.access_token === undefined) {
//     c.status(500)
//     c.res.body = 'Failed to get access_token'
//     return
//   }

//   let imgcheck_api = `https://api.weixin.qq.com/wxa/img_sec_check`
//     + `?access_token=${tk.access_token}`

//   let imgcheck = await gohttp.post(imgcheck_api, {
//     //直接把原始的body数据传递过去
//     //c.rawBody中存储了HTTP协议格式的上传数据
//     rawBody: c.rawBody,

//     //把客户端请求的header传递给微信服务端
//     headers: c.headers
//   })

//   //把请求结果转换为文本格式返回
//   c.res.body = imgcheck.text()

// }, '检测图片');


// app.run(1234);
