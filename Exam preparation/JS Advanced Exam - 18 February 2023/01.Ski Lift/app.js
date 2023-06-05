window.addEventListener('load', solve);

function solve() {
    let firstNameField = document.getElementById('first-name');
    let lastNameField = document.getElementById('last-name');
    let numberOfPeopleField = document.getElementById('people-count');
    let fromDateField = document.getElementById('from-date');
    let daysField = document.getElementById('days-count');
    let nextStepButton = document.getElementById('next-btn');

    let ticketsInfoUlElement = document.querySelector('#info-ticket div div ul');
    let confirmTicketUlElement = document.querySelector('#confirm-ticket-section div div ul');

    nextStepButton.addEventListener('click', next);
    function next(e) {
        e.preventDefault();
        if (firstNameField.value == '' || lastNameField.value == '' || numberOfPeopleField.value == ''
            || fromDateField.value == '' || daysField.value == '') {
                return;
            }
            let liElement = document.createElement('li');
            liElement.classList.add('ticket');

            let articleElement = document.createElement('article');
            let h3El = document.createElement('h3');
            h3El.textContent = `Name: ${firstNameField.value} ${lastNameField.value}`;
            let pFromDateEl = document.createElement('p');
            pFromDateEl.textContent = `From date: ${fromDateField.value}`;
            let pDaysEl = document.createElement('p');
            pDaysEl.textContent = `For ${daysField.value} days`
            let pPeopleEl = document.createElement('p');
            pPeopleEl.textContent = `For ${numberOfPeopleField.value} people`;

            articleElement.appendChild(h3El);
            articleElement.appendChild(pFromDateEl);
            articleElement.appendChild(pDaysEl);
            articleElement.appendChild(pPeopleEl);

            let editButton = document.createElement('button');
            editButton.classList.add('edit-btn');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', edit);
            let continueButton = document.createElement('button');
            continueButton.classList.add('continue-btn');
            continueButton.textContent = 'Continue';
            continueButton.addEventListener('click', continueTo)

            liElement.appendChild(articleElement);
            liElement.appendChild(editButton);
            liElement.appendChild(continueButton);
            ticketsInfoUlElement.appendChild(liElement);

            let editFirstName = firstNameField.value;
            let editLastName = lastNameField.value;
            let editnumberOfPeople = numberOfPeopleField.value;
            let editFromDate = fromDateField.value;
            let editDays = daysField.value;

            firstNameField.value = '';
            lastNameField.value = '';
            numberOfPeopleField.value = '';
            fromDateField.value = '';
            daysField.value = '';
            nextStepButton.disabled = true;

            function edit() {
                firstNameField.value = editFirstName;
                lastNameField.value = editLastName;
                numberOfPeopleField.value = editnumberOfPeople;
                fromDateField.value = editFromDate;
                daysField.value = editDays;
                nextStepButton.disabled = false;
                liElement.remove();
            }
            function continueTo() {
                let confirmLiEl = document.createElement('li');
                confirmLiEl.classList.add('ticket-content');

                let confirmButton = document.createElement('button');
                confirmButton.classList.add('confirm-btn');
                confirmButton.textContent = 'Confirm';
                confirmButton.addEventListener('click', confirm);
                let cancelButton = document.createElement('button');
                cancelButton.classList.add('cancel-btn');
                cancelButton.addEventListener('click', cancel);
                cancelButton.textContent = 'Cancel';

                confirmLiEl.appendChild(articleElement);
                confirmLiEl.appendChild(confirmButton);
                confirmLiEl.appendChild(cancelButton);
                confirmTicketUlElement.appendChild(confirmLiEl);

                liElement.remove();

                function confirm() {
                    let body = document.getElementById('body');
                    let mainDiv = document.getElementById('main');
                    let h1El = document.createElement('h1');
                    h1El.textContent = 'Thank you, have a nice day! ';
                    h1El.setAttribute('id', 'thank-you');
                    let thankYouButton = document.createElement('button');
                    thankYouButton.setAttribute('id', 'back-btn');
                    thankYouButton.textContent = 'Back';
                    thankYouButton.addEventListener('click',back);
                    function back(){
                        location.reload();
                    }
                    mainDiv.remove();
                    body.appendChild(h1El);
                    body.appendChild(thankYouButton);
                }
                function cancel() {
                    confirmLiEl.remove();
                    nextStepButton.disabled = false;
                }
            }
        }
    }





