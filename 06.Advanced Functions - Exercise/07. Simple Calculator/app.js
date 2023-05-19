function calculator() {
    let firstNum;
    let secondNum;
    let result;
    return {
        init(selector1, selector2, resultSelector) {
            firstNum = document.querySelector(selector1),
                secondNum = document.querySelector(selector2),
                result = document.querySelector(resultSelector)
        },
        add() {
            firstNum = Number(firstNum.value);
            secondNum = Number(secondNum.value);
            result.value = firstNum + secondNum;
        },
        subtract() {
            firstNum = Number(firstNum.value);
            secondNum = Number(secondNum.value);
            result.value = firstNum-secondNum;
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



