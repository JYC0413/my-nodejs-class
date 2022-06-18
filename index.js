var exportsText = require('./module')
console.log("成功执行index！");
for(i=0;i<3;i++){
    if(i === 0){
        exportsText();
    }else {
        exportsText(i);
    }
}
//通过对象来判断是执行JS的是什么环境
if(typeof(window) === 'undefined'){
    console.log("now is in node.js")
}else {
    console.log("now is in browser")
}
//程序退出时执行的回调函数
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});