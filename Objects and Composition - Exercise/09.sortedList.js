function createSortedList() {
    class Class {
        constructor() {
            this.elements = [],
                this.size = 0
        }
        add(el) {
            this.elements.push(el);
            this.size++;
            this.elements.sort((a, b) => a - b)
        }
        remove(index) {
            if (index >= 0 && index < this.size) {
                this.elements.splice(index, 1);
                this.size--;
                this.elements.sort((a, b) => a - b)
            } else {
                return;
            }
        }
        get(index) {
            if (index >= 0 && index < this.size) {
                return this.elements[index]
            } else {
                return;
            }
        }
    }
    return new Class();
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));