function listProcessor(input) {
    let text = [];
    let obj = {
        add(string) {
            text.push(string);
        },
        remove(string) {
            text = text.filter(x=>x!=string)
        },
        print() {
            console.log(text.join(','));
        }
    }
    for (const command of input) {
        let [prop, value] = command.split(' ');
        let action = obj[prop];
        if (prop != "print") {
            action(value)
        } else {
            action();
        }
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])