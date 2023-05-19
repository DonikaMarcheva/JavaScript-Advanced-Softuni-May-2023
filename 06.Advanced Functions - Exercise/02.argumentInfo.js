function argumentInfo(...params) {
    let obj = {};
    params.forEach(element => {
        let type = typeof (element);
        console.log(`${type}: ${element}`);
        if (!obj.hasOwnProperty(type)) {
            obj[type] = [];
        }
        obj[type].push(element)
    });

    for (const key in obj) {
        let length = obj[key].length;
        obj[key] = length
    }
    let sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    console.table(sortedArr);
}
argumentInfo('cat', 'dog', 42, function () { console.log('Hello world!'); })