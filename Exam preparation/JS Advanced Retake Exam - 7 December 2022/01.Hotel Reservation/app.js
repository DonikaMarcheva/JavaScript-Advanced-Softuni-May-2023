window.addEventListener('load', solve);

function solve() {
    let firstNameField = document.getElementById('first-name');
    let lastNameField = document.getElementById('last-name');
    let checkInField = document.getElementById('date-in');
    let checkOutField = document.getElementById('date-out');
    let guestNumField = document.getElementById('people-count');
    let reservationInfo = document.querySelector('.info-list');
    let confirmReservation = document.querySelector('.confirm-list');
    let reservationDetails = document.getElementById('verification');

    let nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', next);
    function next(e) {
        e.preventDefault();

        if (firstNameField.value && lastNameField.value
            && checkInField.value && checkOutField.value && guestNumField.value
            && checkInField.value < checkOutField.value) {
            let liElement = document.createElement('li');
            liElement.classList.add('reservation-content');
            let articleEl = document.createElement('article');
            let h3El = document.createElement('h3');
            let p1El = document.createElement('p');
            let p2El = document.createElement('p');
            let p3El = document.createElement('p');
            let editButton = document.createElement('button');
            let continueButton = document.createElement('button');
            h3El.textContent = `Name: ${firstNameField.value} ${lastNameField.value}`;
            p1El.textContent = `From date: ${checkInField.value}`;
            p2El.textContent = `To date: ${checkOutField.value}`;
            p3El.textContent = `For ${guestNumField.value} people`;
            editButton.classList.add('edit-btn');
            editButton.textContent = 'Edit'
            editButton.addEventListener('click', edit);
            continueButton.classList.add('continue-btn');
            continueButton.textContent = 'Continue';
            continueButton.addEventListener('click', continueTo);
            articleEl.appendChild(h3El);
            articleEl.appendChild(p1El);
            articleEl.appendChild(p2El);
            articleEl.appendChild(p3El);
            liElement.appendChild(articleEl);
            liElement.appendChild(editButton);
            liElement.appendChild(continueButton);
            reservationInfo.appendChild(liElement);

            let editFirstName = firstNameField.value;
            let editLastName = lastNameField.value;
            let editChechIn = checkInField.value;
            let editCheckOut = checkOutField.value;
            let editGuestNum = guestNumField.value;

            firstNameField.value = '';
            lastNameField.value = '';
            checkInField.value = '';
            checkOutField.value = '';
            guestNumField.value = ';'
            nextButton.disabled = true;

            function edit() {
                firstNameField.value = editFirstName;
                lastNameField.value = editLastName;
                checkInField.value = editChechIn;
                checkOutField.value = editCheckOut;
                guestNumField.value = editGuestNum;
                nextButton.disabled = false;
                liElement.remove();
            }
            function continueTo() {
                let liConfirm = document.createElement('li');
                liConfirm.appendChild(articleEl);
                let confirmButon = document.createElement('button');
                confirmButon.textContent = 'Confirm';
                confirmButon.classList.add('confirm-btn');
                confirmButon.addEventListener('click', confirm);
                let cancelButton = document.createElement('button');
                cancelButton.textContent = 'Cancel';
                cancelButton.classList.add('cancel-btn');
                cancelButton.addEventListener('click', cancel);
                liConfirm.appendChild(confirmButon);
                liConfirm.appendChild(cancelButton);
                confirmReservation.appendChild(liConfirm);
                liElement.remove();

                function confirm() {
                    nextButton.disabled = false;
                    liConfirm.remove();
                    reservationDetails.classList.add('reservation-confirmed');
                    reservationDetails.textContent = 'Confirmed.';
                }
                function cancel() {
                    nextButton.disabled = false;
                    liConfirm.remove();
                    reservationDetails.classList.add('reservation-cancelled');
                    reservationDetails.textContent = 'Cancelled.';
                }
            }
        }
    }
}





