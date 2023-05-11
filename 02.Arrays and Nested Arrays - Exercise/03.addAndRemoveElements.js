function addAndRemoveElements(commandArr) {
    let num = 1;
    let arr = [];
    commandArr.forEach(command => {
        command === "add" ? arr.push(num++) : arr.pop(num++);
    });
    arr.length != 0 ? console.log(arr.join(`\n`)) : console.log("Empty")
}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'])