function addItem() {
    let textAdded = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items')
    let newElLi = document.createElement('li');
    newElLi.textContent = textAdded.value;
    itemsElement.appendChild(newElLi);
}