function jansNotation(input) {
    let result = [];
    while (input.length !== 0) {
        let element = input.shift();
        if (typeof element === "number") {
            result.push(element);
        } else {
            let firstIndex = result.length - 1;
            let secondIndex = result.length - 2;
            if (firstIndex !== -1 && secondIndex !== -1) {
                let firstNum = result[firstIndex];
                let secondNum = result[secondIndex];
                let newNum = 0;
                switch (element) {
                    case "+": newNum = secondNum + firstNum; break;
                    case "-": newNum = secondNum - firstNum;; break;
                    case "*": newNum = secondNum * firstNum;; break;
                    case "/": newNum = secondNum / firstNum;; break;
                }
                //newNum=Number(newNum);
                result.splice(secondIndex, 2);
                result.push(newNum);
            } else {
                console.log("Error: not enough operands!");
                return;
            }
        }
    }
    if (result.length > 1) {
        console.log("Error: too many operands!");
    } else {
        console.log(result[0]);
    }
}
jansNotation([5,
    3,
    4,
    '*',
    '-']
)