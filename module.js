function exportsText(text){
    if(text){
        console.log('本次输入的是:'+text);
    }else {
        console.log("没有输入任何值！");
    }
}
console.log("成功执行module！");
module.exports = exportsText