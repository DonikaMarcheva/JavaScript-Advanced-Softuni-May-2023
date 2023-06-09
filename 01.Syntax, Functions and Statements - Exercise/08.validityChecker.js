function validityChecker(x1, y1, x2, y2) {
    let isInteger1 = Number.isInteger(Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2)));
    let isInteger2 = Number.isInteger(Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2)));
    let isInteger3 = Number.isInteger(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    
    console.log(isInteger1 ? `{${x1}, ${y1}} to {0, 0} is valid` : `{${x1}, ${y1}} to {0, 0} is invalid`);
    console.log(isInteger2 ? `{${x2}, ${y2}} to {0, 0} is valid` : `{${x2}, ${y2}} to {0, 0} is invalid`);
    console.log(isInteger3 ? `{${x1}, ${y1}} to {${x2}, ${y2}} is valid` : `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
}

validityChecker(3, 0, 0, 4)