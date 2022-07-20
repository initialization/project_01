function resolveData(data) {
    var arr = [];
    for(var k in data) {
        arr.push(k + '=' + data[k]);
    }
    return arr;
}

console.log(resolveData({"name":'hello', "age":12}).join('&'));
