window.addEventListener("load", solve);

function solve() {

    let gemStoneInputField = document.getElementById('gem-name');
    let colorInputField = document.getElementById('color');
    let caratsInputField = document.getElementById('carats');
    let priceInputField = document.getElementById('price');
    let typeInputField = document.getElementById('type');

    let previewListElement = document.getElementById('preview-list');
    let collectionElement = document.getElementById('collection');

    let addButton = document.getElementById('add-btn');

    addButton.addEventListener('click', add);

    function add(e) {
        e.preventDefault();
        if (gemStoneInputField.value !== '' && caratsInputField.value !== '' && colorInputField !== '' &&
            priceInputField !== '' && typeInputField !== '') {
            let liElement = document.createElement('li');
            liElement.classList.add('gem-info');
            let articleEl = document.createElement('article');

            let h4Element = document.createElement('h4');
            h4Element.textContent = gemStoneInputField.value;

            let pColorEl = document.createElement('p');
            pColorEl.textContent = `Color: ${colorInputField.value}`;

            let pCaratsEl = document.createElement('p');
            pCaratsEl.textContent = `Carats: ${caratsInputField.value}`;

            let pPriceEl = document.createElement('p');
            pPriceEl.textContent = `Price: ${priceInputField.value}$`;

            let pTypeEl = document.createElement('p');
            pTypeEl.textContent = `Type: ${typeInputField.value}`;

            articleEl.appendChild(h4Element);
            articleEl.appendChild(pColorEl);
            articleEl.appendChild(pCaratsEl);
            articleEl.appendChild(pPriceEl);
            articleEl.appendChild(pTypeEl);
            liElement.appendChild(articleEl);

            let saveButton = document.createElement('button');
            saveButton.textContent = 'Save to Collection'
            saveButton.classList.add('save-btn');
            saveButton.addEventListener('click', save);
            let editButton = document.createElement('button');
            editButton.textContent = 'Edit Information'
            editButton.classList.add('edit-btn');
            editButton.addEventListener('click', edit);
            let cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancel;'
            cancelButton.classList.add('cancel-btn');
            cancelButton.addEventListener('click', cancel)

            liElement.appendChild(saveButton);
            liElement.appendChild(editButton);
            liElement.appendChild(cancelButton);
            previewListElement.appendChild(liElement);

            let h4Text = gemStoneInputField.value;
            let colorText = colorInputField.value;
            let caratsText = caratsInputField.value;
            let priceText = priceInputField.value;
            let typeText = typeInputField.value;

            gemStoneInputField.value = '';
            colorInputField.value = '';
            caratsInputField.value = '';
            priceInputField.value = '';
            typeInputField.value = '';
            addButton.disabled = true;

            function edit() {
                gemStoneInputField.value = h4Text;
                colorInputField.value = colorText;
                caratsInputField.value = caratsText;
                priceInputField.value = priceText;
                typeInputField.value = typeText;
                addButton.disabled = false;
                liElement.remove();
            }
            function save() {
                let collectionLiEl = document.createElement('li');
                let collectionPEl = document.createElement('p');
                collectionPEl.classList.add('collection-item');
                collectionPEl.textContent = `${h4Text} - Color: ${colorText}/ Carats: ${caratsText}/ Price: ${priceText}$/ Type: ${typeText}`;
                collectionLiEl.appendChild(collectionPEl);
                collectionElement.appendChild(collectionLiEl);
                liElement.remove();
                addButton.disabled = false;
            }
            function cancel() {
                liElement.remove();
                addButton.disabled = false;
            }
        }
    }
}

