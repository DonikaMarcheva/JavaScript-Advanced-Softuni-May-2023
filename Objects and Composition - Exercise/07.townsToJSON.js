function townsToJSON(arr) {
    let obj = [];
    let headerArr = arr.shift().split('|').map(x => x.trim()).filter(x => x.length > 0);
    let [town, latitude, longitude] = headerArr;

    while (arr.length > 0) {
        let townInfo = {};
        let data = arr.shift().split('|').map(x => x.trim()).filter(x => x.length > 0);
        let [name, latitudeValue, longitudeValue] = data;

        latitudeValue = Number(latitudeValue);
        longitudeValue = Number(longitudeValue);
        townInfo[town] = name;
        townInfo[latitude] = Number(latitudeValue.toFixed(2));
        townInfo[longitude] = Number(longitudeValue.toFixed(2));
        obj.push(townInfo);
    }
    console.log(JSON.stringify(obj));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])