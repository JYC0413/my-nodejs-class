var fs = require('fs');
var rs = fs.createReadStream('ai_3.png');
var ws = fs.createWriteStream('./images/WriteStream.png')
//执行获取流可读取
rs.on('data',function (chunk){
    ws.write(chunk)
    ws.end()
    console.log("DATA:" + chunk)
})
//执行获取流结束
rs.on('end',function (){
    console.log('END');
})
//执行失败
rs.on('error',function (e){
    console.log("Error:" + e)
})
