function addItem() {
    let addMenu = document.getElementById('menu');
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.text = newText;
    option.value = newValue;

    if (newText !== '' && newValue !== '') {
        addMenu.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}