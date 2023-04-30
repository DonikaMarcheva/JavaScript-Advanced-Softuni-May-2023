function calorieObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length - 1; i += 2) {
        let key = arr[i];
        let value = Number(arr[i + 1]);
        obj[key] = value;
    }
    console.log(obj)
}
calorieObject(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52'])