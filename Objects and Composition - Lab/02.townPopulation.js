function townPopulation(input) {
    let obj = {};
    for (const element of input) {
        let [name, population] = element.split(' <-> ');
        population=Number(population);
        if(obj[name]){
            obj[name]+=Number(population);
        }else{
        obj[name] = population;
        }
    }
    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
)