function sumOfNumbersNM(n, m){
    let sum=0;
    let firstNum=Number(n);
    let secondNum=Number(m);

    for(let i=firstNum;i<=secondNum;i++){
sum+=i;
    }
    console.log(sum);
}
sumOfNumbersNM('1', '5' )