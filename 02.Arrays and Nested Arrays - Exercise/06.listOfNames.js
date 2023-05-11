function listOfNames(input) {
    let sortedNames = input.sort((a, b) => a.localeCompare(b));
    for (let i = 1; i <= input.length; i++) {
        let name = sortedNames[i - 1];
        console.log(`${i}.${name}`);
    }
}
listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"])