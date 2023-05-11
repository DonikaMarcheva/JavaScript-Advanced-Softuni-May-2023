function stringLength(firstWord, secondWord, thirdWord){
let length=(firstWord+secondWord+thirdWord).length;
let averageLength=Math.floor(length/3);
console.log(length);
console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake')