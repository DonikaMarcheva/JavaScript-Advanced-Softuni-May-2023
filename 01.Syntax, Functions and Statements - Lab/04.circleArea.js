function circleArea(input){
console.log(typeof(input)=="number"? (input**2*Math.PI).toFixed(2):`We can not calculate the circle area, because we receive a ${typeof(input)}.`)
}
circleArea(5);
console.log("+++++++++++");
circleArea('name')