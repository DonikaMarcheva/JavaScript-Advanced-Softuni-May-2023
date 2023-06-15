function solve() {
    let firstName = document.getElementById('fname');
    let lastName = document.getElementById('lname');
    let email = document.getElementById('email');
    let birthDay = document.getElementById('birth');
    let position = document.getElementById('position');
    let salary = document.getElementById('salary');
    let hireWorketButton = document.getElementById('add-worker');
    hireWorketButton.addEventListener('click', hire);
    let tBody = document.getElementById('tbody');
    let salaryBudjet = document.getElementById('sum');
    let salarySum = Number(salaryBudjet.textContent);

    function hire(e) {
        e.preventDefault();
        if (firstName.value && lastName.value && email.value && birthDay.value && position.value && salary.value) {
            let firstNameValue = firstName.value;
            let lastNameValue = lastName.value;
            let emailValue = email.value;
            let birthDayValue = birthDay.value;
            let positionValue = position.value;
            let salaryValue = salary.value;

            let trElement = createElements('tr');
            let td1 = createElements('td', firstNameValue);
            let td2 = createElements('td', lastNameValue);
            let td3 = createElements('td', emailValue);
            let td4 = createElements('td', birthDayValue);
            let td5 = createElements('td', positionValue);
            let td6 = createElements('td', salaryValue);
            let td7 = createElements('td');
            let firedButton = createElements('button', 'Fired');
            firedButton.classList.add('fired');
            firedButton.addEventListener('click', fire);
            let editButton = createElements('button', 'Edit');
            editButton.classList.add('edit');
            editButton.addEventListener('click', edit);
            td7.appendChild(firedButton);
            td7.appendChild(editButton);
            trElement.appendChild(td1);
            trElement.appendChild(td2);
            trElement.appendChild(td3);
            trElement.appendChild(td4);
            trElement.appendChild(td5);
            trElement.appendChild(td6);
            trElement.appendChild(td7);
            tBody.appendChild(trElement);
            salarySum += Number(salary.value);
            salaryBudjet.textContent = salarySum.toFixed(2);

            firstName.value = '';
            lastName.value = '';
            email.value = '';
            birthDay.value = '';
            position.value = '';
            salary.value = '';
            function edit() {
                firstName.value = firstNameValue;
                lastName.value = lastNameValue;
                email.value = emailValue;
                birthDay.value = birthDayValue;
                position.value = positionValue;
                salary.value = salaryValue;
                salarySum -= salaryValue;
                salaryBudjet.textContent = salarySum.toFixed(2);
                trElement.remove();
            }
            function fire() {
                salarySum -= salaryValue;
                salaryBudjet.textContent = salarySum.toFixed(2);
                trElement.remove();
            }
        }
    }

    function createElements(tagName, content) {
        let el = document.createElement(`${tagName}`);
        if (content) {
            el.textContent = content;
        }
        return el;
    }
}
solve()