// 引入文件读取接口
const fs = require('fs');
fs.readFile('./file/1.txt', 'utf-8', function(err,dataStr) {
    console.log(err);
    console.log(dataStr);
})