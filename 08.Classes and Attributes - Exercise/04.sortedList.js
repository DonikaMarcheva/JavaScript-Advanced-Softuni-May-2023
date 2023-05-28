class List {
    constructor() {
        this.array = [];
        this.size = this.array.length;
    }
    add(el) {
        this.array.push(el);
        this.array.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index < 0 || index >= this.array.length) {
            return;
        }
        this.array.splice(index, 1);
        this.array.sort((a, b) => a - b);
        this.size--;
    }
    get(index) {
        if (index < 0 || index >= this.array.length) {
            return;
        }
        return this.array[index];
    }
}
let list = new List();
list.add(5);
list.add(3);
list.remove(0);
console.log(list.size);
