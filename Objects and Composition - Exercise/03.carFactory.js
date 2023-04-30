function carFactory(data) {
    let car = {
        model: data.model,
    }
    if (data.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if (data.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }

    car.carriage = {
        type: data.carriage,
        color: data.color
    }
    let wheelDiameterNum = data.wheelsize;
    if (wheelDiameterNum % 2 === 0) {
        wheelDiameterNum--;
    }

    car.wheels = new Array(4).fill(wheelDiameterNum);
    return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
})