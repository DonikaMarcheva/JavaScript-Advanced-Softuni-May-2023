function roadRadar(speed, area) {
    let limit = 0;
    // •	On the motorway, the limit is 130 km/h
    // •	On the interstate, the limit is 90 km/h
    // •	In the city, the limit is 50 km/h 
    // •	Within a residential area, the limit is 20 km/h
    switch (area) {
        case "motorway": limit = 130; break;
        case "interstate": limit = 90; break;
        case "city": limit = 50; break;
        case "residential": limit = 20; break;
    }
    let exceededSpeed = speed - limit;
    if (exceededSpeed <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let status = "reckless driving";
        if (exceededSpeed <= 20) {
            status = "speeding";
        } else if (exceededSpeed <= 40) {
            status = "excessive speeding";
        }
        console.log(`The speed is ${exceededSpeed} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}
roadRadar(21, 'residential')