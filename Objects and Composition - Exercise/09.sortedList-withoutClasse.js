function createSortedList() {
    let elements = [];
    let obj = {
        add(el) {
            elements.push(el);
            this.size++;
            elements.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < elements.length) {
                elements.splice(index, 1);
                this.size--;
            } else {
                return;
            }
        },
        get(index) {
            if (index >= 0 && index < elements.length) {
                return elements[index];
            } else {
                return;
            }
        },
        size: 0
    }
    return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));