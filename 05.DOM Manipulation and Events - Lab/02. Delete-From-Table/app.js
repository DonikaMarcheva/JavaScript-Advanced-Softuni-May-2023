function deleteByEmail() {
    let rowsArr = Array.from(document.querySelectorAll('tbody tr'));
    let searchedEmail = document.querySelector('input[name="email"]').value;
    let areaToAppend = document.getElementById('result');
    let newPElement = document.createElement('p');

    for (const row of rowsArr) {
        let email = row.children[1].textContent;
        if (email === searchedEmail) {
            // row.parentNode.removeChild(row);
            row.remove(); 
            newPElement.textContent = 'Deleted.'
            areaToAppend.appendChild(newPElement);
            return;
        };
    }
    newPElement.textContent = 'Not found.'
    areaToAppend.appendChild(newPElement);
    
}