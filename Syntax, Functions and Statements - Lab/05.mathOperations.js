function mathOperations(firstNum, secondNum,string){
switch(string){
        case"+":console.log(firstNum+secondNum);break;
        case "-":console.log(firstNum-secondNum);break;
        case "*":console.log(firstNum*secondNum);break;
        case "/":console.log(firstNum/secondNum);break;
        case "%":console.log(firstNum%secondNum);break;
        case "**":console.log(firstNum**secondNum);break;       
}   
}
mathOperations(5, 6, '+')