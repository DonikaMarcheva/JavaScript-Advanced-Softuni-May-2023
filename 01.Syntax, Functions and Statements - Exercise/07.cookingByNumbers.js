function cookingByNumbers(inputNumber, operation1, operation2, operation3, operation4, operation5, operation6) {
    // •	chop - divide the number by two
    // •	dice - square root of a number
    // •	spice - add 1 to the number
    // •	bake - multiply number by 3
    // •	fillet - subtract 20% from the number
    inputNumber = Number(inputNumber);
    inputNumber = manipulator(inputNumber, operation1);
    inputNumber = manipulator(inputNumber, operation2);
    inputNumber = manipulator(inputNumber, operation3);
    inputNumber = manipulator(inputNumber, operation4);
    inputNumber = manipulator(inputNumber, operation5);
    inputNumber = manipulator(inputNumber, operation6);

    function manipulator(num, operation) {
        switch (operation) {
            case "chop": num /= 2;
                console.log(num);
                break;
            case "dice": num = Math.sqrt(num);
                console.log(num);
                break;
            case "spice": num += 1;
                console.log(num);
                break;
            case "bake": num *= 3;
                console.log(num);
                break;
            case "fillet": num *= 0.8;
                console.log(num);
                break;
        }
        return num;
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')