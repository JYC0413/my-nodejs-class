const fs = require('fs');
let files = 'jyc';
//异步读取文档内容
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        // files = data;
        console.log(data);
    }
});
//读取非文档文件（二进制文件），不传入文件编码=>data返回一个Buffer对象
fs.readFile('ai_3.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
        //写文件
        fs.writeFile('output.png', data, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('ok.');
            }
        });
    }
});

fs.stat('sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size + '字节');
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

//同步读取文件（用try catch抓报错）（原函数名加个Sync）
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch (err) {
    console.log(err);
}
